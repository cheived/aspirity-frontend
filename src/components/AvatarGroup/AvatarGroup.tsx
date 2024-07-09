import Avatar from "../Avatar/Avatar";


export default function AvatarGroup({ limit, team }) {
    limit = 7
    return (
        <div className="flex items-center">
            {team.slice(0, limit).map((item, i) => {
                let classList: string = ""
                if (i !== 0) {
                    classList = "-ml-3"
                }
                return (
                    <Avatar key={i} size={48} className={classList} />
                )
            })}
            {team.length > limit ? <p className="ml-2 text-body1 text-text-primary">+{team.length - limit}</p> : null}

        </div>
    )
}