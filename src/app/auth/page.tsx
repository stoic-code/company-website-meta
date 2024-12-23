"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={(e) => {
        setloading(true);
        e.preventDefault();
        fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((res) => {
          if (res.status === 200) return router.push("/admin");
          setError("Invalid username or password");
          setloading(false);
        });
      }}
      className="flex min-h-screen w-fit flex-col gap-3 px-8 py-32"
    >
      <input
        type="text"
        placeholder="username"
        className="border border-gray-500"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="password"
        className="border border-gray-500"
      />
      <button className="border border-black bg-gray-200">
        {loading ? "Submitting ..." : "submit"}
      </button>
      {error ? <p className="text-red-600">{error}</p> : null}
    </form>
  );
};

export default page;
