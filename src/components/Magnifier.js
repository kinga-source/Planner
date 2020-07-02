import React, { Component } from 'react'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';


class Search extends Component {
    state = {
        query: '',
    }

    handleInputChange = (event) => {
        const { setFilter } = this.props;
        this.setState({
            query: event.target.value
        })
        setFilter(this.state.query);
    }

    render() {
        return (
            <TextField
                onChange={this.handleInputChange}
                value={this.state.query}
                label="Search for tasks"
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        )
    }
}

export default Search