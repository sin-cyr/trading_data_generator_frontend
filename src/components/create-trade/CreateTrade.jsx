import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import 'react-dropdown/style.css';

export const CreateTrade = ({ onCreateTradesPressed }) => {
	const [tradeType, setTradeType] = useState("");
	const [quantity, setQuantity] = useState(0);
	const [actionType, setActionType] = useState("");
	const [percentage, setPercentage] = useState(0);

	const bodyFormData = {
		tradeType: tradeType,
		quantity: quantity,
		actionType: actionType,
		percentage: percentage
	}

	return (
		<Form>
			<h3>New Trade</h3>

			<br />

			<label>Trade Type: </label>
			<select value={tradeType} onChange={(event) => setTradeType(event.target.value)}>
				<option value="Please choose a type">Please choose a type</option>
				<option value="Margin Lending">Margin Lending</option>
				<option value="Sec-Com Lending">Sec-Com Lending</option>
				<option value="Repurchase">Repurchase</option>
				<option value="Buy-Sell Back">Buy-Sell Back</option>
			</select>

			<br />
			<br />

			<label>Quantity: </label>
			<input 
				type="text" 
				pattern="[0-9]*" 
				value={quantity} 
				onChange={(event) => event.target.validity.valid && setQuantity(event.target.value)}
			/>

			<br />
			<br />

			<label>Data error rate (%): </label>
			<select value={percentage} onChange={(event) => setPercentage(event.target.value)}>
				<option value="0">0%</option>
				<option value="25">25%</option>
				<option value="50">50%</option>
				<option value="75">75%</option>
				<option value="100">100%</option>
			</select>

			<br />
			<br />

			<label>Action Type: </label>
			<select value={actionType} onChange={(event) => setActionType(event.target.value)}>
				<option value="Please choose an action type">Please choose a type</option>
				<option value="NEWT">NEWT</option>
				<option value="MODI">MODI</option>
				<option value="EROR">EROR</option>
				<option value="ETRM">ETRM</option>
				<option value="POSC">POSC</option>
				<option value="COLU">COLU</option>
				<option value="CORR">CORR</option>
				{tradeType === 'Sec-Com Lending' && <option value="VALU">VALU</option>}
			</select>

			<br />
			<br />

			<Button onClick={() => onCreateTradesPressed(bodyFormData)}>Submit</Button>
		</Form>
	)
}
