import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles, InputStylesApiWrapper } from '@mantine/storybook/src';
import { Autocomplete, AutocompleteProps } from '../Autocomplete';
import { Autocomplete as AutocompleteStylesApi } from '../styles.api';

const styles = generateBorderStyles(AutocompleteStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<AutocompleteProps>) {
  return (
    <InputStylesApiWrapper component={Autocomplete} data={['React', 'Angular', 'Vue']} {...props} />
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Autocomplete/styles-api', module)
  .add('With sx', () => (
    <Wrapper sx={{ border: '1px solid red', maxWidth: 400 }} mx="auto" mt="xl" />
  ))
  .add('Root styles object', () => <Wrapper styles={{ root: { border: '1px solid blue' } }} />)
  .add('Root styles function', () => (
    <Wrapper styles={() => ({ root: { border: '1px solid blue' } })} />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Autocomplete: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
