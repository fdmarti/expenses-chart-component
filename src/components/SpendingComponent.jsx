import { useEffect, useState } from 'react';
import { DayBarComponent } from './DayBarComponent';

export const SpendingComponent = () => {
	const [days, setDays] = useState([]);

	const getDataByDay = async() => {
		const result = await fetch('../../data.json');
		const data = await result.json();
		setDays(data);
	};

	useEffect(() => {
		getDataByDay();
	}, []);

	return (
		<div className='spending'>
			<p>Spending - Last 7 days</p>
			<section className='days'>
				{days.map((day, index) => {
					return (
						<DayBarComponent day={day.day} amount={day.amount} key={index} />
					);
				})}
			</section>

			<hr />

			<div className='total'>
				<section className='total-month'>
					<p>Total this month</p>
					<span>$478.33</span>
				</section>
				<section className='total-balance'>
					<span className='porcentage'>+2.4%</span>
					<span>from last month</span>
				</section>
			</div>
		</div>
	);
};
