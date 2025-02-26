import PropTypes from 'prop-types'

function Item(props){
    return(
        <>
            <li>
                {props.marca} - {props.ano_lancamento}
            </li>
        </>
    );
}

export default Item

Item.propTypes = {
    marca: propTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 1,
}