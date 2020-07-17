import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { SEARCH_PRODUCT } from '../../actions/types';
import './Search.css';
import axios from 'axios';

function Search() {
	const dispatch = useDispatch();

	const fetch = async (e) => {
		try {
			const res = await axios.get(`/admin/searchedPhone?name=${e.target.value}`);
console.log('res', res)
			dispatch({
				type: SEARCH_PRODUCT,
				payload: res.data
			});
		} catch (err) {
      console.log('err', err)
	
		}
	};

	return (
		<Form className="form_search">
			<InputGroup className="mb-3">
				<FormControl
					type="text"
					className="search_bar"
					placeholder="Serach A Product"
					onChange={(e) =>fetch(e)}
					autoFocus
				/>
				<InputGroup.Prepend>
					<InputGroup.Text>
						<i className="fas fa-search" />
					</InputGroup.Text>
				</InputGroup.Prepend>
			</InputGroup>
		</Form>
	);
}

export default Search;
