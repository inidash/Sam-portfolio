import { socialMedia } from '@/constants'
import Link from 'next/link'
import React from 'react'

const SocialMedia = ({containerStyle, iconStyle}) => {
  return (
    <div className={containerStyle}>
        {socialMedia.map(({icons, path}, index) => (
            <Link key={index} href={path} className={iconStyle}>{icons}</Link>
        ))}
    </div>
  )
}

export default SocialMedia