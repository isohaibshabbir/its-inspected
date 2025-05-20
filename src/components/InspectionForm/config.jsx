
export const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8", "Step 9", "Review"];

export const formConfig = [
    {
        step: 0,
        sections: [
            {
                title: "Seller Information",
                fields: [
                    { label: "Seller's Phone Number:", name: "sellerPhone", type: "phone", required: true, colSpan: 1 },
                    { label: "Type Of Seller:", name: "typeOfSeller", type: "radio", options: ["Private Seller", "Dealer", "Maybe Freelancer"], colSpan: 1, required: true },
                ]
            },
            {
                // title: "Thumnail Image",
                fields: [
                    { label: "Thumnail Image:", name: "thumbnailImages", type: "image-upload", singleIamge: true, colSpan: 2, required: true },
                    { label: "Car Images:", name: "carImages", type: "image-upload", colSpan: 2 }
                ]
            },
            {
                title: "Customer Details",
                fields: [
                    { label: "First Name", name: "firstName", type: "text", required: true, colSpan: 1 },
                    { label: "Last Name", name: "lastName", type: "text", colSpan: 1, required: true },
                    { label: "Date:", name: "date", type: "date", colSpan: 1, required: true },
                    { label: "Time:", name: "time", type: "time", colSpan: 1, required: true },
                ]
            },
            {
                title: "Vehicle Details",
                fields: [
                    { label: "Car Brand", name: "carBrand", type: "select", options: ["AM General", "Toyota", "Honda"], colSpan: 1 },
                    { label: "Model", name: "model", type: "select", options: ["S", "3", "X", "Y"], colSpan: 1 },
                    { label: "Year:", name: "year", type: "year", colSpan: 1 },
                    { label: "Mileage (KM)", name: "mileage", type: "number", colSpan: 1 },
                    {
                        label: "Fuel Type", name: "fuelType", type: "select", options: [
                            "Gasoline (Petrol)",
                            "Diesel",
                            "Electricity (EV)",
                            "Hybrid (HEV)",
                            "Plug-in Hybrid (PHEV)",
                            "Compressed Natural Gas (CNG)",
                            "Liquefied Petroleum Gas (LPG)",
                            "Ethanol (E85, E10)",
                            "Biodiesel",
                            "Hydrogen (Fuel Cell) ",
                            "Could'nt Inspect",
                        ], colSpan: 1
                    },
                    {
                        label: "Regional Specs", name: "regionalSpecs", type: "select", options: [
                            "American",
                            "Canadian",
                            "Korean",
                            "Chiniese",
                            "GCC",
                            "Japanese",
                            "European",
                        ], colSpan: 1
                    },
                    {
                        label: "Transmission", name: "transmission", type: "select", options: [
                            "Automatic Transmission (AT)",
                            "Manual Transmission (MT)",
                            "Electric",
                            "Continuously Variable Transmission (CVT)",
                            "Could'nt Inspect",
                        ], colSpan: 1
                    },
                    {
                        label: "No of Cylinders", name: "noCylinders", type: "select", options: [
                            "3-cylinder",
                            "4-cylinder ",
                            "6-cylinder ",
                            "8-cylinder ",
                            "10-cylinder ",
                            "12-cylinder ",
                            "14-cylinder ",
                            "16-cylinder ",
                            "N/A",
                        ], colSpan: 1
                    },

                    { label: "Engine Size", name: "engineSize", type: "text", colSpan: 1 },
                    { label: "Title", name: "title", type: "text", colSpan: 1 },
                    {
                        label: "Car Title", name: "carTitle", type: "select", options: [
                            "Clean Title",
                            "Salvage Title",
                            "Rebuilt/Reconstructed Title",
                            "Flood Title",
                            "Junk Title",
                            "Dismantled Title",
                            "Lemon Law Title",
                            "Odometer Roll Back Title",
                            "Bonded Title",
                            "Theft Recovery Title",
                            "Export Only Title",
                            "Parts Only Title",
                        ], colSpan: 1
                    },
                    {
                        label: "Car Eligible for Warranty in UAE", name: "carEligible", type: "select", options: [
                            "Eligible",
                            "Not Eligible",
                        ], colSpan: 1
                    },
                    { label: "Car Color", name: "carColor", type: "text", colSpan: 1 },
                    {
                        label: "Vehicle Type", name: "vehicleType", type: "select", options: [
                            "                            Sedan",
                            "SUV",
                            "Coupe",
                            "Hatchback",
                            "Convertible",
                            "Station Wagon",
                            "Motorcycle",
                            "Luxury Car",
                            "Sports Car",
                            "Minivan",
                            "Truck",
                            "Van",
                        ], colSpan: 1
                    },
                    {
                        label: "Drive Type", name: "driveType", type: "select", options: [
                            "Front-Wheel Drive (FWD)",
                            "Rear-Wheel Drive (RWD)",
                            "All-Wheel Drive (AWD)",
                            "Four-Wheel Drive (4WD)",
                            "Part-Time 4WD",
                            "Full-Time 4WD",
                            "Electric Drive (EV)",
                            "Hybrid Drive",
                        ], colSpan: 1
                    },
                    {
                        label: "Interior", name: "interior", type: "select", options: [
                            "Leather",
                            "Fabric",
                            "Suede ",
                            "Couldn't Inspect",
                        ], colSpan: 1
                    },
                    { label: "VIN Number", name: "vin", type: "text", colSpan: 1 },
                    {
                        label: "No of Keys", name: "noKeys", type: "select", options: [
                            "1",
                            "2",
                            "3",
                            "none"
                        ], colSpan: 1
                    },
                    {
                        label: "Spare Tire", name: "spareTire", type: "select", options: [
                            "Avaiable",
                            "Not Available",
                            "Couldn't Inspect",
                        ], colSpan: 1
                    },
                    {
                        label: "Primary Damage:", name: "primaryDamage", type: "checkbox", required: true, options: [
                            "None",
                            "Front End",
                            "Rear End",
                            "Side",
                            "Flood",
                            "Fire",
                            "Hale",
                            "Vandalism",
                            "Theft",
                            "Frame Range",
                            "Mechanical",
                            "Electircal",
                            "Undercarriage",
                            "water Damage",
                            "Interior Interior",
                            "Roof",

                        ], colSpan: 2
                    },
                    {
                        label: "Trim", name: "trim", type: "select", options: [
                            "1",
                            "2",
                        ], colSpan: 1
                    },
                    {
                        label: "Vehicle Condition", name: "vehicleCondition", type: "select", options: [
                            "Run and Drive ",
                            "Start",
                            "Won't Start ",
                            "Enhanced Vehicles",
                            "Stationary",
                            "Does not Start",
                            "Salvage",
                        ], colSpan: 1
                    },
                    { label: "Passenger", name: "passenger", type: "number", colSpan: 2 },
                    {
                        label: "Body Type", name: "BodyType", type: "select", options: [
                            "Sedan",
                            "SUV",
                            "Coupe",
                            "Hatchback",
                            "Convertible",
                            "Station Wagon",
                            "Motorcycle",
                            "Luxury Car",
                            "Sports Car",
                            "Minivan",
                            "Limousine",
                            "Hyper Car",
                            "Van",
                            "Pickup truck",
                        ], colSpan: 1
                    }, ,
                    { label: "Vehicle Highlights", name: "vehicleHighlights", type: "textarea", required: false, colSpan: 2 }
                ]
            }
        ]
    },
    {
        step: 1,
        sections: [
            {
                title: "Engine",
                fields: [
                    {
                        label: "Engine Upper Cover", name: "engineUpperCover", type: "radio", options: [
                            "Pass",
                            "Minor Scratches",
                            "Major Scratches",
                            "Cracked / Broken",
                            "Missing Components",
                            "Missing",
                            "Other",
                        ], colSpan: 1, hasOther: true
                    },
                    { label: "Engine Upper Cover - Photo", name: "engineUpperCoverImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Engine Shield Cover", name: "engineShieldCover", type: "radio", options: [
                            "Pass",
                            "Minor Scratches",
                            "Major Scratches",
                            "Cracked / Broken",
                            "Missing Components",
                            "Missing",
                            "Other",
                        ], colSpan: 1, hasOther: true
                    },
                    { label: "Engine Shield Cover - Photo", name: "engineShieldCoverImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Engine Mounts", name: "engineMounts", type: "select", options: [
                            "Pass",
                            "Minor worn out due to wear and tear.Needs to be replaced",
                            "Damaged(can lead to engine vibration)",
                            "Broken(can lead to engine vibration and clunking noise)",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Engine Mounts - Photo", name: "engineMountsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Bonnet Hinge & Holder", name: "bonnetHingeHolder", type: "select", options: [
                            "Pass ",
                            "Missing/Unavailable",
                            "Not opening smoothly, cable and/or lock needs to be repaired.",
                            "Aftermarket",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Bonnet Hinge & Holder - Photo", name: "bonnetHingeHolderImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Turbo / Supercharger", name: "turboSupercharger", type: "select", options: [
                            "Pass",
                            "N/A",
                            "Fan not working properly",
                            "Needs to be serviced",
                            "Seal(s) damaged",
                            "Hose/clamp damaged",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Turbo / Supercharger - Photo", name: "turboSuperchargerImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Fender Liners", name: "FenderLiners", type: "select", options: [
                            "Pass",
                            "Scratched",
                            "Minor Damaged/Cracked",
                            "Major Damaged/Cracked",
                            "Missing clips",
                            "Liners missing",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Fender Liners - Photo", name: "Fender LinersImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Drive Belt / Pulleys", name: "driveBeltPulleys", type: "select", options: [
                            "Pass",
                            "General wear and tear",
                            "Squeaking belt sounds",
                            "Damaged bearing",
                            "Damaged pulley",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Drive Belt / Pulleys - Photo", name: "driveBeltPulleysImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Engine Idle", name: "engineIdle", type: "select", options: [
                            "Pass",
                            "RPM is fluctuating",
                            "Idling below normal",
                            "Bouncing or shaking during idle",
                            "Engine stalling",
                            "Vehicle not starting",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Engine Idle - Photo", name: "engineIdleImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Engine Oil Filler Cap", name: "engineOilFillerCap", type: "select", options: [
                            "Pass",
                            "Oil filler cap damaged/broken",
                            "Oil filler cap missing",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Engine Oil Filler Cap - Photo", name: "engineOilFillerCapImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Radiator", name: "radiator", type: "select", options: [
                            "Pass",
                            "Visible external damage",
                            "Symptoms of clogged radiator",
                            "Hose(s) damaged, need to be replaced",
                            "Hose clamps missing",
                            "Leakage visible",
                            "Radiator cap damaged/broken",
                            "Radiator cap missing",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Radiator - Photo", name: "radiatorImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Engine Oil Leaks", name: "engineOilLeaks", type: "select", options: [
                            "Pass",
                            "Leak from oil filter gasket",
                            "Leak from oil pan gasket",
                            "Leak from oil pump gasket",
                            "Leak from valve cover/camshaft gasket",
                            "Leak from oil drain plug",
                            "Leak from crankshaft seal",
                            "Leak from timing cover gasket",
                            "Leak from head gasket",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Engine Oil Leaks - Photo", name: "engineOilLeaksImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Engine Oil Condition", name: "engineOilCondition", type: "select", options: [
                            "Pass",
                            "Oil is black, needs to be replaced",
                            "Level is low, needs to be topped up with same oil grade",
                            "Level is high, needs to be partially removed",
                            "Signs of coolant in engine oil, might mean failure in one more of engine gaskets or seals",
                            "Oil filler cap damaged/broken",
                            "Oil filler cap missing",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Engine Oil Condition - Photo", name: "engineOilConditionImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "CoolantCondition", name: "coolantCondition", type: "select", options: [
                            "Pass",
                            "Needs to be topped up",
                            "Needs to be flushed (Looks colorless/rusty)",
                            "Looks sludgy/oil surface (Might be head gasket leakage)",
                            "Coolant hose needs to be replaced (Leaking/cracked/bulgy)",
                            "Oil filler cap damaged/broken",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Coolant Condition - Photo", name: "coolantConditionImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Coolant Cap", name: "coolantCap", type: "select", options: [
                            "Pass",
                            "Filler cap missing",
                            "Filler cap damaged/broken",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Coolant Cap - Photo", name: "coolantCapImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Hoses & Pipes", name: "hosesPipes", type: "select", options: [
                            "Pass",
                            "Other"
                        ], colSpan: 1
                    },
                    { label: "Hoses & Pipes - Photo", name: "hosesPipesImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Exhaust System", name: "exhaustSystem", type: "select", options: [
                            "Pass",
                            "Exhaust leak prominent",
                            "Rust on exhaust prominent",
                            "Gasket(s) needs to be replaced",
                            "Clamp missing",
                            "Hanger bent/damaged",
                            "Exhaust tip(s) damaged",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Exhaust System - Photo", name: "exhaustSystemImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Visible Rust", name: "visibleRust", type: "select", options: [
                            "Pass",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Visible Rust - Photo", name: "visibleRustImages", type: "image-upload", colSpan: 1 },
                    { label: "Battery Condition", name: "batteryCondition", type: "battery", colSpan: 2 }

                ]
            },
        ]
    },
    {
        step: 2,
        sections: [
            {
                title: "Transmission",
                fields: [
                    {
                        label: "Fluid Level & Condition", name: "fluidLevelCondition", type: "select", options: [
                            "Pass",
                            "Dark brown, fluid and filter needs to be replaced",
                            "Light pinkish fluid, water or fluid contamination. Might mean damaged transmission",
                            "Level is low, needs to be topped up with same oil grade",
                            "Level is high, needs to be partially removed",
                            "Filler cap damaged/broken",
                            "Filler cap missing",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Fluid Level & Condition - Photo", name: "fluidLevelConditionImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Transmission Fluid Leaks", name: "transmissionFluidLeaks", type: "select", options: [
                            "Pass",
                            "Leak from transmission seal",
                            "Leak from transmission lines",
                            "Leak from transmission pump",
                            "Leak from transmission pan",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Transmission Fluid Leaks - Photo", name: "transmissionFluidLeaksImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Gear Selector", name: "gearSelector", type: "select", options: [
                            "Pass",
                            "Scratched",
                            "Damaged/Cracked",
                            "Missing components",
                            "Missing",
                            "Aftermarket",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Gear Selector - Photo", name: "gearSelectorImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Noise", name: "noise", type: "select", options: [
                            "Pass",
                            "Other"
                        ], colSpan: 1
                    },
                    {
                        label: "Gear Shifting", name: "gearShifting", type: "select", options: [
                            "Pass",
                            "Other"
                        ], colSpan: 1
                    },
                    {
                        label: "Car", name: "car", type: "select", options: [

                        ], colSpan: 1
                    },
                    { label: "Car - Photo", name: "carImages", type: "image-upload", colSpan: 1 },

                ]
            },
        ]
    },
    {
        step: 3,
        sections: [
            {
                title: "Brake System, Suspension & Tyres",
                fields: [
                    {
                        label: "Brake Pads Front", name: "brakePadsFront", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    {
                        label: "Brake Pads Rear", name: "brakePadsRear", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    {
                        label: "Brake Discs Front", name: "brakeDiscsFront", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    {
                        label: "Brake Discs Rear", name: "brakeDiscsRear", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    {
                        label: "ABS Sensors", name: "aBSSensors", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    {
                        label: "Handbrake", name: "handbrake", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    {
                        label: "Front Suspension", name: "frontSuspension", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Front Suspension - Photo", name: "frontSuspensionImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Rear Suspension", name: "rearSuspension", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Rear Suspension - Photo", name: "rearSuspensionImages", type: "image-upload", colSpan: 1 },
                    { label: "Front Left Tyre - Photo", name: "frontLeftTyreImages", type: "image-upload", colSpan: 2 },
                    { label: "Rear Left Tyre - Photo", name: "rearLeftTyreImages", type: "image-upload", colSpan: 2 },
                    { label: "Rear Right Tyre - Photo", name: "rearRightTyreImages", type: "image-upload", colSpan: 2 },
                    { label: "Front Right Tyre - Photo", name: "frontRightTyreImages", type: "image-upload", colSpan: 2 },
                ]
            },
        ]
    },
    {
        step: 4,
        sections: [
            {
                title: "Electrical System",
                fields: [
                    {
                        label: "Key Remote", name: "keyRemote", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Key Remote - Photo", name: "keyRemoteImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Entertainment System", name: "entertainmentSystem", type: "radio", options: [
                            "Pass",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Entertainment System - Photo", name: "entertainmentSystemImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Windows Operation", name: "windowsOperation", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Windows Operation - Photo", name: "windowsOperationImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Seats Adjustment (Power/Manual)", name: "seatsAdjustment", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Seats Adjustment (Power/Manual) - Photo", name: "seatsAdjustmentImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Door Lock / Unlock", name: "doorLockUnlock", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Door Lock / Unlock - Photo", name: "doorLockUnlockImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "A/C Control & Cooling", name: "aCControlCooling", type: "radio", options: [
                            "Pass",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "A/C Control & Cooling - Photo", name: "aCControlCoolingImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Center Console Buttons", name: "centerConsoleButtons", type: "radio", options: [
                            "Pass",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Center Console Buttons - Photo", name: "centerConsoleButtonsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Cameras", name: "cameras", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Cameras - Photo", name: "camerasImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Gauges", name: "gauges", type: "radio", options: [
                            "Pass",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Gauges - Photo", name: "gaugesImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Rear View / Side Mirror Electricals", name: "rearViewSideMirrorElectricals", type: "radio", options: [
                            "Pass",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Rear View / Side Mirror Electricals - Photo", name: "rearViewSideMirrorElectricalsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "A/C Grilles", name: "aCGrilles", type: "radio", options: [
                            "Pass",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "A/C Grilles - Photo", name: "aCGrillesImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Starting & Ignition System", name: "startingIgnitionSystem", type: "radio", options: [
                            "Pass",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Starting & Ignition System - Photo", name: "startingIgnitionSystemImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Brake Lights", name: "brakeLights", type: "radio", options: [
                            "Pass",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Brake Lights - Photo", name: "brakeLightsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Headlights", name: "headlights", type: "radio", options: [
                            "Pass",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Headlights - Photo", name: "headlightsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Fog Lights", name: "fogLights", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Fog Lights - Photo", name: "fogLightsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Reverse Lights", name: "reverseLights", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Reverse Lights - Photo", name: "reverseLightsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "High Beams", name: "highBeams", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "High Beams - Photo", name: "highBeamsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Number Plate Lights", name: "numberPlateLights", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Number Plate Lights - Photo", name: "numberPlateLightsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Indicators & Hazards", name: "indicatorsHazards", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Indicators & Hazards - Photo", name: "indicatorsHazardsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Wipers", name: "wipers", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Wipers - Photo", name: "wipersImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Soft Closing Doors", name: "softClosingDoors", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 2
                    },
                    {
                        label: "Sunroof / Moonroof", name: "sunroofMoonroof", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Sunroof / Moonroof - Photo", name: "sunroofMoonroofImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Interior Lights", name: "interiorLights", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Interior Lights - Photo", name: "interiorLightsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Cruise Control", name: "cruiseControl", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    {
                        label: "Horn", name: "horn", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    {
                        label: "Parking Sensors", name: "parkingSensors", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Parking Sensors - Photo", name: "parkingSensorsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Car", name: "car", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Car - Photo", name: "carImages", type: "image-upload", colSpan: 1 },
                ]
            },
        ]
    },
    {
        step: 5,
        sections: [
            {
                title: "Interior",
                fields: [
                    {
                        label: "Roof Lining", name: "roofLining", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Roof Lining - Photo", name: "roofLiningImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Rear View Mirror", name: "rearViewMirror", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Rear View Mirror - Photo", name: "rearViewMirrorImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Steering Wheel Upholstery", name: "steeringWheelUpholstery", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Steering Wheel Upholstery - Photo", name: "steeringWheelUpholsteryImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Seats Upholstery", name: "seatsUpholstery", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Seats Upholstery - Photo", name: "seatsUpholsteryImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Gear Lever", name: "gearLever", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Gear Lever - Photo", name: "gearLeverImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Trunk Lining", name: "trunkLining", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Trunk Lining - Photo", name: "trunkLiningImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Armrest & Side Pockets", name: "armrestSidePockets", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Armrest & Side Pockets - Photo", name: "armrestSidePocketsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Dashboard", name: "dashboard", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Dashboard - Photo", name: "dashboardImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Floor Mats", name: "floorMats", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Floor Mats - Photo", name: "floorMatsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Doors", name: "doors", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Doors - Photo", name: "doorsImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Front Windscreen", name: "frontWindscreen", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Front Windscreen - Photo", name: "frontWindscreenImages", type: "image-upload", colSpan: 1 },
                    {
                        label: "Rear Windscreen", name: "rearWindscreen", type: "radio", options: [
                            "Pass",
                            "N/A",
                            "Other",
                        ], colSpan: 1
                    },
                    { label: "Rear Windscreen - Photo", name: "rearWindscreenImages", type: "image-upload", colSpan: 1 },
                ]
            },
        ]
    },
    {
        step: 6,
        sections: [
            {
                title: "Exterior",
                fields: [
                    { label: "Exterior Images", name: "exteriorImages", type: "image-upload", colSpan: 2 },
                ]
            },
        ]
    },
    {
        step: 7,
        sections: [
            {
                title: "Interior",
                fields: [
                    { label: "Interior Images", name: "interiorImages", type: "image-upload", colSpan: 2 },
                ]
            },
        ]
    },
    {
        step: 8,
        sections: [
            {
                title: "Engine Bay and Under Carriage",
                fields: [
                    { label: "Engine Bay Images", name: "engineBayImages", type: "image-upload", colSpan: 2 },
                ]
            },
        ]
    },
    {
        step: 8,
        sections: [
            {
                title: "Vehicle Diagnostic Report",
                fields: [
                    { label: "Vehicle Diagnostic File Upload", name: "vehicleDiagnosticReport", type: "image-upload", colSpan: 2 },
                ]
            },
        ]
    }
];