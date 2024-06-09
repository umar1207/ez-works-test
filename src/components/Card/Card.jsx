const Card = ({ img, title, body }) => {
    return (
        <div className="rounded-lg bg-card-bg w-80 h-64 text-white">
            <div className="flex flex-col text-2xl gap-5 m-8">
                <div className="flex items-center gap-5">
                    <div>
                        <img src={img} alt="Icon" className="w-14 h-14" />
                    </div>
                    <div className="text-card-head w-40 leading-7">
                        {title}
                    </div>
                </div>
                <div className="text-card-body leading-7">
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Card;