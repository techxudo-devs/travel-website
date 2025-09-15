// import { BASE_URL } from "@/app/utils/ApiBaseUrl";
// import TourPackagesClient from "./TourPackages";

// const getTours = async () => {
//   try {
//     const res = await fetch(`${BASE_URL}/api/tours/preplanned`, {});
//     if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//     return await res.json();
//   } catch (error) {
//     console.error("Failed to fetch tour packages:", error);
//     return [];
//   }
// };

// export const TourPackages = async () => {
//   const tours = await getTours();
//   console.log("Get Tours", tours);
//   return <TourPackagesClient tours={tours} />;
// };
