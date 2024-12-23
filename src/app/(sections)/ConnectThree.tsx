"use client";
import { useEffect, useState } from "react";
import { TweenLite, Circ } from "gsap";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ConnectThree = () => {
  useEffect(() => {
    let width: number,
      height: number,
      largeHeader: HTMLElement | null,
      canvas: HTMLCanvasElement | null,
      ctx: CanvasRenderingContext2D | null,
      points: any[], // or define a proper type for points
      target: { x: number; y: number },
      animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      largeHeader = document.getElementById("large-header");
      if (largeHeader) {
        largeHeader.style.height = height + "px";
      }

      canvas = document.getElementById("demo-canvas") as HTMLCanvasElement;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
      }

      // create points
      points = [];
      for (let x = 0; x < width; x = x + width / 20) {
        for (let y = 0; y < height; y = y + height / 20) {
          let px = x + (Math.random() * width) / 20;
          let py = y + (Math.random() * height) / 20;
          let p = { x: px, originX: px, y: py, originY: py, closest: [] };
          points.push(p);
        }
      }

      // for each point find the 5 closest points
      for (let i = 0; i < points.length; i++) {
        let closest: any[] = [];
        let p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          let p2 = points[j];
          if (p1 !== p2) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // assign a circle to each point
      for (let i of points) {
        //@ts-ignore
        let c = new Circle(i, 2 + Math.random() * 2, "rgba(255,255,255,0.3)");
        i.circle = c;
      }
    }

    // Event handling
    function addListeners() {
      if (!("ontouchstart" in window)) {
        window.addEventListener("mousemove", mouseMove);
      }
      window.addEventListener("scroll", scrollCheck);
      window.addEventListener("resize", resize);
    }

    function mouseMove(e: MouseEvent) {
      let posx = 0,
        posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      if (document.body.scrollTop! > height) animateHeader = false;
      else animateHeader = true;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (largeHeader) {
        largeHeader.style.height = height + "px";
      }
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }

    // animation
    function initAnimation() {
      animate();
      for (let i of points) {
        shiftPoint(i);
      }
    }

    function animate() {
      if (animateHeader) {
        ctx!.clearRect(0, 0, width, height);
        for (let i of points) {
          // detect points in range
          if (Math.abs(getDistance(target, i)) < 4000) {
            i.active = 0.3;
            i.circle.active = 0.6;
          } else if (Math.abs(getDistance(target, i)) < 20000) {
            i.active = 0.1;
            i.circle.active = 0.3;
          } else if (Math.abs(getDistance(target, i)) < 40000) {
            i.active = 0.02;
            i.circle.active = 0.1;
          } else {
            i.active = 0;
            i.circle.active = 0;
          }

          drawLines(i);
          i.circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p: any) {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: function () {
          shiftPoint(p);
        },
      });
    }

    // Canvas manipulation
    function drawLines(p: any) {
      if (!p.active) return;
      for (let i of p.closest) {
        ctx!.beginPath();
        ctx!.moveTo(p.x, p.y);
        ctx!.lineTo(i.x, i.y);
        ctx!.strokeStyle = "rgba(156,217,249," + p.active + ")";
        ctx!.stroke();
      }
    }

    function Circle(
      this: { pos: any; radius: any; color: any; active: any },
      pos: { x: number; y: number },
      rad: number,
      color: string,
    ) {
      // constructor
      this.pos = pos || null;
      this.radius = rad || null;
      this.color = color || null;
      this.active = 0; // Add an initial value for 'active'

      //@ts-ignore
      this.draw = function () {
        if (!this.active) return;
        ctx!.beginPath();
        ctx!.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx!.fillStyle = "rgba(156,217,249," + this.active + ")";
        ctx!.fill();
      };
    }

    // Util
    function getDistance(
      p1: { x: number; y: number },
      p2: { x: number; y: number },
    ) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    // pause the animation on click
    let firstClick = true;

    function handleCanvasClick() {
      if (firstClick) {
        animateHeader = false;
        firstClick = false;
      } else {
        animateHeader = true;
        firstClick = true;
      }
    }

    const demoCanvas = document.getElementById(
      "demo-canvas",
    ) as HTMLCanvasElement;
    demoCanvas?.addEventListener("click", handleCanvasClick);

    return () => {
      demoCanvas?.removeEventListener("click", handleCanvasClick);
    };
  }, []);

  return (
    <div
      id="large-header"
      className="large-header relative h-screen overflow-hidden bg-black bg-herobg bg-cover bg-center"
    >
      <canvas id="demo-canvas"></canvas>
      <div className="heroMainCard text-center text-white">
        <FadeIn>
          <div>
            <h2 className="mb-8 text-4xl font-semibold lg:text-6xl">
              Transforming Today <br />
              For <br /> Digital Tomorrow
            </h2>
            <p className="w-[90vw] font-semibold lg:w-full">
              We are committed to offering state-of-the-art software solutions
              that <br />
              enable companies to prosper in the digital world.
            </p>
          </div>
        </FadeIn>
        <FadeIn className="flex justify-center pt-10">
          <Link
            href="/about"
            className="group flex gap-2 rounded-lg bg-translucent-dark-300 px-8 py-3 transition-all duration-500 hover:bg-secondary-300"
          >
            Learn More
            <span className="sr-only">Go To our about page</span>
            <ArrowRight className="transition-all duration-500 group-hover:translate-x-2" />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};

export default ConnectThree;
