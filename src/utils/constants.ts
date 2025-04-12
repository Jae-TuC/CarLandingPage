import { FaTemperatureEmpty } from "react-icons/fa6";
import { SlSpeedometer } from "react-icons/sl";
import { RiFlashlightFill } from "react-icons/ri";
import { BsSpeedometer2 } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { GiGasPump } from "react-icons/gi";

import brand1 from "../assets/brand1.png";

import catLogo1 from "../assets/logo1.png";
import catLogo2 from "../assets/logo2.png";
import catLogo3 from "../assets/logo3.png";

import car1 from "../assets/featured1.png";
import car2 from "../assets/featured2.png";
import car3 from "../assets/featured3.png";
import car4 from "../assets/featured5.png";
import car5 from "../assets/featured6.png";

import brandCar1 from "../assets/car1.png";
import brandCar2 from "../assets/car2.png";
import brandCar3 from "../assets/car3.png";
import brandCar4 from "../assets/car4.png";
import brandCar5 from "../assets/car5.png";
import brandCar6 from "../assets/car6.png";

const navLink = ["Home", "About", "Popular", "Featured"];

const data = [
  {
    icon: SlSpeedometer,
    label: "Temperature",
    value: "25°",
  },
  {
    icon: FaTemperatureEmpty,
    label: "Mileage",
    value: "873",
  },
  {
    icon: RiFlashlightFill,
    label: "Battery",
    value: "94%",
  },
];

export const brands = [
  {
    name: "Porsche",
    model: "Turbo 5",
    image: brand1,
    price: "175900",
    details: [
      {
        icon: BsSpeedometer2,
        label: "3.7sec",
      },
      {
        icon: GoGraph,
        label: "356km/h",
      },
      {
        icon: GiGasPump,
        label: "Electric",
      },
    ],
  },
  {
    name: "Porsche",
    model: "Tycan",
    image: brand1,
    price: "114900",
    details: [
      {
        icon: BsSpeedometer2,
        label: "3.7sec",
      },
      {
        icon: GoGraph,
        label: "356km/h",
      },
      {
        icon: GiGasPump,
        label: "Electric",
      },
    ],
  },
  {
    name: "Porsche",
    model: "Turbo S Cross",
    image: brand1,
    price: "175900",
    details: [
      {
        icon: BsSpeedometer2,
        label: "3.7sec",
      },
      {
        icon: GoGraph,
        label: "356km/h",
      },
      {
        icon: GiGasPump,
        label: "Electric",
      },
    ],
  },
];

export const categories = [
  {
    id: 1,
    label: "All",
    value: "all",
    icon: null,
    isActive: true,
  },
  {
    id: 2,
    label: "Porsche",
    value: "porsche",
    icon: catLogo1,
    isActive: false,
  },
  {
    id: 3,
    label: "Audi",
    value: "audi",
    icon: catLogo2,
    isActive: false,
  },
  {
    id: 4,
    label: "Tesla",
    value: "tesla",
    icon: catLogo3,
    isActive: false,
  },
];

export const luxCars = [
  {
    id: 1,
    name: "Tesla",
    model: "Model X",
    image: car1,
    category: "tesla",
    price: "175900",
    features: [
      { icon: BsSpeedometer2, label: "3.7sec" },
      { icon: GoGraph, label: "356km/h" },
      { icon: GiGasPump, label: "Electric" },
    ],
  },
  {
    id: 2,
    name: "Tesla",
    model: "Model 3",
    image: car2,
    category: "tesla",
    price: "114900",
    features: [
      { icon: BsSpeedometer2, label: "3.7sec" },
      { icon: GoGraph, label: "356km/h" },
      { icon: GiGasPump, label: "Electric" },
    ],
  },
  {
    id: 3,
    name: "Audi",
    model: "E-tron",
    image: car3,
    category: "audi",
    price: "175900",
    features: [
      { icon: BsSpeedometer2, label: "3.7sec" },
      { icon: GoGraph, label: "356km/h" },
      { icon: GiGasPump, label: "Electric" },
    ],
  },
  {
    id: 4,
    name: "Porsche",
    model: "Boxster 987",
    image: car4,
    category: "porsche",
    price: "175900",
    features: [
      { icon: BsSpeedometer2, label: "3.7sec" },
      { icon: GoGraph, label: "356km/h" },
      { icon: GiGasPump, label: "Electric" },
    ],
  },
  {
    id: 5,
    name: "Porsche",
    model: "Panamera",
    image: car5,
    category: "porsche",
    price: "175900",
    features: [
      { icon: BsSpeedometer2, label: "3.7sec" },
      { icon: GoGraph, label: "356km/h" },
      { icon: GiGasPump, label: "Electric" },
    ],
  },
];

export const carLogos = [
  {
    id: 1,
    img: brandCar1,
  },
  {
    id: 2,
    img: brandCar2,
  },
  {
    id: 3,
    img: brandCar3,
  },
  {
    id: 4,
    img: brandCar4,
  },
  {
    id: 5,
    img: brandCar5,
  },
  {
    id: 6,
    img: brandCar6,
  },
];

export { navLink, data };
