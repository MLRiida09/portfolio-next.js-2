import Image from 'next/image';

import { assets, MyInfo, socials } from '@/public/assets/assets'

function Profile({ theme }) {
  return (
    <div className="profile">
        <Image
          src={assets.profile}
          alt="profile picture"
          width={50}
          height={50}
          className="profile-image"
        />
        <span>{MyInfo.name}</span>
    </div>
  )
} 

export default Profile;