import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderSocialLink = (props) => {
  return (
    <a
      target='_blank'
      href={props.href}
      className={props.margin}>
      <FontAwesomeIcon
        icon={props.fontAwesome}
        size={props.size} />
    </a>
  )
}

export default HeaderSocialLink
