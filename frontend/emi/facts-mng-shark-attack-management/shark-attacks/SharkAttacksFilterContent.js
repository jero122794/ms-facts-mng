import React, { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel, TextField } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import { MDText } from 'i18n-react';
import i18n from "../i18n";


function TodoSidebarContent(props) {
    const dispatch = useDispatch();
    const user = useSelector(({ auth }) => auth.user);
    const { filters: { active: activeChecked, country, type, species } } = useSelector(({ SharkAttackManagement }) => SharkAttackManagement.sharkAttacks);
    const T = new MDText(i18n.get(user.locale));


    function handleActiveChange(evt) {
        if (activeChecked === null) {
            dispatch(Actions.setSharkAttacksFilterActive(true));
        } else if (activeChecked) {
            dispatch(Actions.setSharkAttacksFilterActive(false));
        } else {
            dispatch(Actions.setSharkAttacksFilterActive(null));
        }
    }


    return (
        <FuseAnimate animation="transition.slideUpIn" delay={400}>

            <div className="flex-auto border-l-1 border-solid">

                <div className="p-24">
                    <FormGroup row>
                        <TextField
                            className="mr-12 mb-16"
                            id="country"
                            name="country"
                            label="Country"
                            variant="outlined"
                            value={country}
                            onChange={(e) => dispatch(Actions.setSharkAttacksFilterCountry(e.target.value))}
                        />
                        <TextField
                            className="mr-12 mb-16"
                            id="type"
                            name="type"
                            label="Type"
                            variant="outlined"
                            value={type}
                            onChange={(e) => dispatch(Actions.setSharkAttacksFilterType(e.target.value))}
                        />
                        <TextField
                            className="mr-12 mb-16"
                            id="species"
                            name="species"
                            label="Species"
                            variant="outlined"
                            value={species}
                            onChange={(e) => dispatch(Actions.setSharkAttacksFilterSpecies(e.target.value))}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={activeChecked === null ? false : activeChecked}
                                    indeterminate={activeChecked === null}
                                    onChange={handleActiveChange}
                                    value="active"
                                    inputProps={{
                                        'aria-label': 'primary checkbox',
                                    }}
                                />
                            }
                            label={T.translate("shark_attacks.filters.active")}
                        />
                    </FormGroup>
                </div>




            </div>
        </FuseAnimate>
    );
}

export default TodoSidebarContent;
