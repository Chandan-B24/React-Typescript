import { useParams } from "react-router-dom"

const SingleProfile = () => {

    const {profileId} = useParams<{profileId : string}>()

  return (
    <div>SingleProfile {profileId}</div>
  )
}

export default SingleProfile