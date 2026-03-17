import './index.css'

const LanguageFilterItem = props => {
  const {filterDetails, isActive, changeLanguage} = props
  const {id, language} = filterDetails

  const onClickBtn = () => {
    changeLanguage(id)
  }

  const activeClass = isActive ? 'active' : ''

  return (
    <li>
      <button
        type="button"
        className={`filter-btn ${activeClass}`}
        onClick={onClickBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
