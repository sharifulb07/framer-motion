"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  const id = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <div>
      <h1>
        Review {reviewId} is not found for product {id}
      </h1>
    </div>
  );
}
