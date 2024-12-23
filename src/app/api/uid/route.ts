import { NextResponse, NextRequest } from "next/server";
// import { nanoid } from "nanoid";
// import AnynmousUser from "@/models/AnynmousUser";
import Blog from "@/models/Blog";
import BlogPost from "@/models/BlogPost";

// export const POST = async (req: NextRequest) => {
// export const POST = async (req: NextRequest) => {
//   const userId = req.cookies.get("_id_");
//   const blogId = await req.text();
//
//   if (userId) {
//     return NextResponse.json({});
//   } else {
//     try {
//       const newUser = nanoid();
//       const anynmousUser = new AnynmousUser({ uid: newUser });
//       await anynmousUser.save();
//       try {
//         const updatedBlog = await Blog.findOneAndUpdate(
//           { _id: blogId },
//           { $inc: { views: 1 } },
//           { new: true },
//         );
//       } catch (err) {
//         console.log(err);
//
//         return NextResponse.json(
//           { message: "Internal Server Error" },
//           { status: 500 },
//         );
//       }
//
//       const res = new NextResponse("success", { status: 200 });
//       res.cookies.set("_id_", newUser, {
//         httpOnly: true,
//         maxAge: 60 * 60 * 24 * 365, // 2 hours in seconds
//       });
//
//       return res;
//     } catch (err) {
//       console.log(err);
//       return NextResponse.json(
//         { message: "Internal Server Error" },
//         { status: 500 },
//       );
//     }
//   }
// };

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    await BlogPost.findOneAndUpdate(
      { _id: body.blog },
      { $inc: { views: 1 } },
      { new: true },
    );
    return NextResponse.json("success", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};
