import SinglePriceOptoon from "../SinglePriceOption/SinglePriceOptoon";

const PriceOptions = () => {
    const PriceOptions=[
        {
        "id": 1,
        "name": "Basic Membership",
        "price": "$29.99/month",
        "features": [
            "Access to gym facilities",
            "Limited group classes",
            "No personal training"
        ]
        },
        {
        "id": 2,
        "name": "Standard Membership",
        "price": "$49.99/month",
        "features": [
            "Access to gym facilities",
            "Unlimited group classes",
            "Limited personal training sessions"
        ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": "$79.99/month",
            "features": [
            "Access to gym facilities",
            "Unlimited group classes",
            "Unlimited personal training sessions",
            "Access to sauna and spa facilities"
            ]
        }
    ]
    return (
        <div className="m-12">
            <h2 className="text-7xl font-bold mb-6">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    PriceOptions.map(option=><SinglePriceOptoon key={option.id} option={option}/>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;