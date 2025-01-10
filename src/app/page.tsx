import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Footer from "./components/Footer";
import { Heart } from "lucide-react";

type CarCardProps = { 
  name: string; 
  type: string; 
  imageUrl: string; 
  price?: number; 
  isFavorite?: boolean; };

// Create a separate component for car cards to reduce repetition
const CarCard: React.FC<CarCardProps> = ({ 
  name, 
  type, 
  imageUrl, 
  price = 99.00, 
  isFavorite = false 
}) => (
  <Card className="w-full max-w-[304px] mx-auto h-full flex flex-col">
    <CardHeader>
      <CardTitle className="w-full flex items-center justify-between">
        {name}
        <Heart 
          className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-300'}`} 
        />
      </CardTitle>
      <CardDescription>{type}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col items-center justify-center gap-4">
      <Image 
        src={imageUrl} 
        alt={`${name} car`} 
        width={220} 
        height={68} 
        className="object-contain"
      />
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">🚀 Auto</span>
        <span className="text-sm text-gray-600">⛽ Petrol</span>
        <span className="text-sm text-gray-600">💺 4 Seats</span>
      </div>
    </CardContent>
    <CardFooter className="w-full flex items-center justify-between">
      <p>
        ${price.toFixed(2)}/<span className="text-gray-500">day</span>
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 transition-colors p-2 text-white rounded-md">
        Rent Now
      </button>
    </CardFooter>
  </Card>
);

export default function Home() {
  // Create arrays of car data to make the code more dynamic
  const popularCars = [
    { name: "Koenigsegg", type: "Sport", image: "/car.png", isFavorite: true },
    { name: "Nissan GT-R", type: "Sport", image: "/car (1).png", isFavorite: false },
    { name: "Rolls-Royce", type: "Sedan", image: "/car.png", isFavorite: true },
    { name: "Porsche 911", type: "Sport", image: "/car (1).png", isFavorite: false },
  ];

  const recommendedCars = [
    { name: "All New Rush", type: "SUV", image: "/suv.png", isFavorite: true },
    { name: "CR-V", type: "SUV", image: "/suv (4).png", isFavorite: false },
    { name: "All New Terios", type: "SUV", image: "/suv (4).png", isFavorite: true },
    { name: "MG ZX Exclusive", type: "SUV", image: "/suv.png", isFavorite: false },
    { name: "NEW MG ZS", type: "SUV", image: "/suv.png", isFavorite: true },
    { name: "MG ZX Excite", type: "SUV", image: "/suv (4).png", isFavorite: false },
  ];

  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
    
      
      {/* Ads Section with More Dynamic Layout */}
      <section className="w-full grid md:grid-cols-2 gap-4 sm:gap-8 justify-center items-center">
        {["/Ads 1.png", "/Ads 2.png"].map((ad, index) => (
          <Image 
            key={index} 
            src={ad} 
            alt={`Advertisement ${index + 1}`} 
            width={640} 
            height={360} 
            className="w-full rounded-lg shadow-md"
          />
        ))}
      </section>

      {/* Pickup and Dropoff Section */}
      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image src="/Pick - Up.png" alt="Pick-up Location" width={582} height={132} className="max-w-full" />
        <Image src="/Switch.png" alt="Switch" width={60} height={60} className="max-w-full" />
        <Image src="/Drop - Off.png" alt="Drop-off Location" width={582} height={132} className="max-w-full" />
      </section>

      {/* Popular Cars Section */}
      <section className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-500 text-xl font-semibold">Popular Cars</h2>
          <Link href="/categories" className="text-blue-600 hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularCars.map((car, index) => (
            <CarCard 
              key={index}
              name={car.name}
              type={car.type}
              imageUrl={car.image}
              isFavorite={car.isFavorite}
            />
          ))}
        </div>
      </section>

      {/* Recommended Cars Section */}
      <section className="w-full flex flex-col gap-4">
        <h2 className="text-gray-500 text-xl font-semibold mb-4">Recommended Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedCars.map((car, index) => (
            <CarCard 
              key={index}
              name={car.name}
              type={car.type}
              imageUrl={car.image}
              isFavorite={car.isFavorite}
            />
          ))}
        </div>
      </section>

      {/* Show More Button */}
      <section className="w-full text-center">
        <Link href="/categories">
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 text-white rounded-md mt-5">
            Explore More Cars
          </button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
