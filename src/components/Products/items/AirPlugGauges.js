import React from "react";
import ProductPage from "../ProductPages";
import productImage from "../../assets/air_plug_gauges.png";

const AirPlugGauges = () => {
    return (
        <ProductPage 
            title="Air Plug Gauge" 
            image={productImage} 
            description={`
                Air Plug Gauges are precision-engineered tools used in industrial applications to measure internal diameters 
                with extreme accuracy. These gauges operate using air pressure differentials to detect even the smallest 
                variations in size, making them an essential tool for quality control in manufacturing.

                Our Air Plug Gauges are designed for durability and high precision, ensuring reliable performance in 
                high-precision machining and automotive industries. With their non-contact measurement capability, 
                they help prevent surface damage while delivering superior accuracy.

                Designed for easy integration into automated systems, these gauges provide real-time monitoring and feedback, 
                improving efficiency and reducing production errors. Whether for batch production or high-tolerance inspections, 
                Air Plug Gauges are the go-to choice for professionals seeking precision and reliability.
            `}
        />
    );
};

export default AirPlugGauges;
