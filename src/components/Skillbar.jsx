export default function Skillbar({ name, level }) {
    return (
        <div className="py-4">
            <p className="flex justify-between items-end text-xs mb-1 font-bold"><span>{name}</span><span className="highlight">{level}%</span></p>
            <div className="bar">
                <div className="bar-color" style={{ width: `${level}%` }}></div>
            </div>
        </div>
    )
}