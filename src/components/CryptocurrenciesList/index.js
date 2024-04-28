// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="List-header">
      <p className="List-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="List-coin-value-heading">USD</p>
        <p className="List-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="Cryptocurrencies-list-container">
        {this.renderCryptocurrenciesHeader()}
        <ul className="Cryptocurrencies-list">
          {cryptocurrenciesData.map(eachCryptocurency => (
            <CryptocurrencyItem
              key={eachCryptocurency.id}
              cryptocurencyDetails={eachCryptocurency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
