export default function CardDashboard({ data, name, icon }) {
    return (
        <>
            <div className="card static bg-base-300">
                <div className="card-body">
                    <div className="bg-info rounded-full w-14 h-14 flex justify-center items-center mb-4">
                        <box-icon name={icon} size="md" />
                    </div>
                    <h3 className="font-bold">{name}</h3>
                    <h2 className="text-4xl font-bold">{data}</h2>
                </div>
            </div>
        </>
    );
}
