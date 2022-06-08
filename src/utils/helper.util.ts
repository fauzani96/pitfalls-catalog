// Currency formatting
const idrFormatterPadded = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
})

const idrFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
})

export function truncateFractional(number: number, digit: number) {
  const pow = 10 ** digit
  return Math.trunc(number * pow) / pow
}

export function convertToRupiah(nominal: number, paddedFraction = true) {
  const formatter = paddedFraction ? idrFormatterPadded : idrFormatter

  // The formatter does rounding when truncating fractions,
  // if you have 0.999, it should not mean that you have Rp 1,00
  const fractions = paddedFraction ? 2 : 0
  const formatted = formatter.format(truncateFractional(nominal, fractions))

  // Additionally, there shouldn't be a space between currency sign and nominal
  return formatted.replace(/\s+/g, '')
}

export function convertToRoundedRupiah(
  nominal: number,
  paddedFraction: boolean
) {
  return convertToRupiah(Math.round(nominal || 0), paddedFraction)
}
