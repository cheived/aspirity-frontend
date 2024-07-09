import Avatar from "../Avatar/Avatar";

interface Props {
    limit: number,
    team: object[],
    tw?: string

}


const AvatarGroup: React.FC<Props> = ({ limit, team, tw }) => {
    limit = 7
    return (
        <div className="flex items-center">
            {team.slice(0, limit).map((item: object, i: Number) => {
                let classList: string = ""
                if (i !== 0) {
                    classList += " -ml-3"
                }
                return (
                    <Avatar key={i.toString()} size={48} tw={classList + " " + tw} />
                )
            })}
            {team.length > limit ? <p className="ml-2 text-body1 text-text-primary">+{team.length - limit}</p> : null}

        </div>
    )
}

export default AvatarGroup