import { statsInfo } from 'components/Card/PokemonCard/PokemonCard'

export function calculateTotalStats(stats: statsInfo[]) {
  return stats.reduce((acc, stat) => acc + stat.base_stat, 0)
}

export function calculateWeight(hectograms: number) {
  return convertToKilograms(hectograms) + '/' + convertToPounds(hectograms)
}

export function calculateHeight(decimeters: number) {
  return convertToMeters(decimeters) + '/' + convertToFeet(decimeters)
}

export function calculateProgressWidth(width: number) {
  return (width / 255) * 100 + '%'
}

export function calculateContentPerPage(browserWidth: number) {
  return browserWidth < 1440 && browserWidth >= 1024 ? 18 : 20;
}

function convertToKilograms(hectograms: number) {
  return hectograms / 10 + 'kg'
}

function convertToPounds(hectograms: number) {
  const pounds = hectograms * 0.220462 // Convert hectograms to pounds
  return pounds.toFixed(1) + 'lb' // Return the pounds value rounded to 2 decimal places
}

function convertToMeters(decimeters: number) {
  return decimeters / 10 + 'm'
}

function convertToFeet(decimeters: number) {
  const inches = decimeters * 3.937 // Convert decimeters to inches
  const feet = Math.floor(inches / 12) // Calculate the whole feet
  const remainingInches = inches % 12 // Calculate the remaining inches
  const formattedFeet = `${feet}.${Math.floor(remainingInches)}` // Format feet without decimal places

  return `${formattedFeet} feet` // Return the formatted feet value
}
