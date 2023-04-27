import PropTypes from 'prop-types';

export const DayBarComponent = ({ day, amount }) => {
	return (
		<div className='day-bar'>
			<div
				className={'chart-bar ' + (day === 'wed' ? 'blue-background' : '')}
				style={{ height: amount }}
				title={amount}
			></div>
			<span>{day}</span>
		</div>
	);
};

DayBarComponent.propTypes = {
	day: PropTypes.string,
	amount: PropTypes.number
};
