export default function CardDashboard({ data, name }) {
    return (
        <>
            <div className="card static w-60 bg-base-100 border">
                <div className="card-body">
                    <div className="bg-info rounded-full w-14 h-14 flex justify-center items-center mb-4">
                        <box-icon name="buildings" size="md" />
                    </div>
                    <h3 className="text-slate-400 font-bold">{name}</h3>
                    <h2 className="text-4xl font-bold">{data}</h2>
                </div>
            </div>
        </>
    );
}
