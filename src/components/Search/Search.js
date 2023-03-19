import React, {useState} from 'react'
import { Autocomplete, TextField } from '@mui/material';

const SearchBar = () => {
    const options = ['The Godfather', 'Pulp Fiction'];
    const [searchValue, setSearchValue] = useState('')

    return (
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 600 }}
        renderInput={(params) => <TextField {...params} label="Search item" />}
        />
    );
}

export default SearchBar;