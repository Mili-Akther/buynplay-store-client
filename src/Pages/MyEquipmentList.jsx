import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyEquipmentCard from "./MyEquipmentCard";

const MyEquipmentList = () => {
  const loadedEquipments = useLoaderData();
  const [equipments, setEquipments] = useState(loadedEquipments);
  return (
    <div className="m-20">
      <h1>My Equipment List - {equipments.length}</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {equipments.map((equipment) => (
          <MyEquipmentCard
            key={equipment._id}
            equipment={equipment}
            equipments={equipments}
            setEquipments={setEquipments}
          />
        ))}
      </div>
    </div>
  );
};

export default MyEquipmentList;
