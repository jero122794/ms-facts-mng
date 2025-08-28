
import React from 'react';
import { TextField, FormControlLabel, Switch } from '@material-ui/core';
import * as Yup from "yup";
import _ from '@lodash';


export function basicInfoFormValidationsGenerator(T) {
    return {
        name: Yup.string()
            .min(3, T.translate("shark_attack.form_validations.name.length", {len:3}))
            .required(T.translate("shark_attack.form_validations.name.required"))
    };
}


/**
 * Aggregate BasicInfo form
 * @param {{dataSource,T}} props 
 */
export function BasicInfo(props) {
    const { dataSource: form, T, onChange, errors, touched, canWrite } = props;
    return (

        <div>
            <TextField
                className="mt-8 mb-16"
                helperText={(errors.name && touched.name) && errors.name}
                error={errors.name && touched.name}
                required
                label={T.translate("shark_attack.name")}
                autoFocus
                id="name"
                name="name"
                value={form.name}
                onChange={onChange("name")}
                onBlur={onChange("name")}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                helperText={(errors.description && touched.description) && errors.description}
                error={errors.description && touched.description}
                id="description"
                name="description"
                onChange={onChange("description")}
                onBlur={onChange("description")}
                label={T.translate("shark_attack.description")}
                type="text"
                value={form.description}
                multiline
                rows={5}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="date"
                name="date"
                onChange={onChange("date")}
                onBlur={onChange("date")}
                label={T.translate("shark_attack.date")}
                type="text"
                value={form.date || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="year"
                name="year"
                onChange={onChange("year")}
                onBlur={onChange("year")}
                label={T.translate("shark_attack.year")}
                type="text"
                value={form.year || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="type"
                name="type"
                onChange={onChange("type")}
                onBlur={onChange("type")}
                label={T.translate("shark_attack.type")}
                type="text"
                value={form.type || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="country"
                name="country"
                onChange={onChange("country")}
                onBlur={onChange("country")}
                label={T.translate("shark_attack.country")}
                type="text"
                value={form.country || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="area"
                name="area"
                onChange={onChange("area")}
                onBlur={onChange("area")}
                label={T.translate("shark_attack.area")}
                type="text"
                value={form.area || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="location"
                name="location"
                onChange={onChange("location")}
                onBlur={onChange("location")}
                label={T.translate("shark_attack.location")}
                type="text"
                value={form.location || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="activity"
                name="activity"
                onChange={onChange("activity")}
                onBlur={onChange("activity")}
                label={T.translate("shark_attack.activity")}
                type="text"
                value={form.activity || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="sex"
                name="sex"
                onChange={onChange("sex")}
                onBlur={onChange("sex")}
                label={T.translate("shark_attack.sex")}
                type="text"
                value={form.sex || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="age"
                name="age"
                onChange={onChange("age")}
                onBlur={onChange("age")}
                label={T.translate("shark_attack.age")}
                type="text"
                value={form.age || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="injury"
                name="injury"
                onChange={onChange("injury")}
                onBlur={onChange("injury")}
                label={T.translate("shark_attack.injury")}
                type="text"
                value={form.injury || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="fatal_y_n"
                name="fatal_y_n"
                onChange={onChange("fatal_y_n")}
                onBlur={onChange("fatal_y_n")}
                label={T.translate("shark_attack.fatal_y_n")}
                type="text"
                value={form.fatal_y_n || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="time"
                name="time"
                onChange={onChange("time")}
                onBlur={onChange("time")}
                label={T.translate("shark_attack.time")}
                type="text"
                value={form.time || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="species"
                name="species"
                onChange={onChange("species")}
                onBlur={onChange("species")}
                label={T.translate("shark_attack.species")}
                type="text"
                value={form.species || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="investigator_or_source"
                name="investigator_or_source"
                onChange={onChange("investigator_or_source")}
                onBlur={onChange("investigator_or_source")}
                label={T.translate("shark_attack.investigator_or_source")}
                type="text"
                value={form.investigator_or_source || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="pdf"
                name="pdf"
                onChange={onChange("pdf")}
                onBlur={onChange("pdf")}
                label={T.translate("shark_attack.pdf")}
                type="text"
                value={form.pdf || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="href_formula"
                name="href_formula"
                onChange={onChange("href_formula")}
                onBlur={onChange("href_formula")}
                label={T.translate("shark_attack.href_formula")}
                type="text"
                value={form.href_formula || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="href"
                name="href"
                onChange={onChange("href")}
                onBlur={onChange("href")}
                label={T.translate("shark_attack.href")}
                type="text"
                value={form.href || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="case_number"
                name="case_number"
                onChange={onChange("case_number")}
                onBlur={onChange("case_number")}
                label={T.translate("shark_attack.case_number")}
                type="text"
                value={form.case_number || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <TextField
                className="mt-8 mb-16"
                id="case_number0"
                name="case_number0"
                onChange={onChange("case_number0")}
                onBlur={onChange("case_number0")}
                label={T.translate("shark_attack.case_number0")}
                type="text"
                value={form.case_number0 || ''}
                variant="outlined"
                fullWidth
                InputProps={{
                    readOnly: !canWrite(),
                }}
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={form.active}
                        onChange={onChange("active")}
                        id="active"
                        name="active"
                        value={form.active}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        variant="outlined"
                        disabled={!canWrite()}
                    />
                }
                label={T.translate("shark_attack.active")}
            />
        </div>
    );
}

