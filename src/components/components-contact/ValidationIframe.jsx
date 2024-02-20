import PropTypes from 'prop-types'

const Iframe = ( {source} ) => {
  if (!source) {
    return (
      <div>Loading...</div>
    )
  }
  
  const src = source
  
  return (
    <iframe src={src} title='iframe' />
  )
};
Iframe.propTypes = {
  source: PropTypes.string.isRequired,
};


export default Iframe