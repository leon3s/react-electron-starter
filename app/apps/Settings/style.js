import Styled from 'styled-components';
import {
  StyleSheet,
  View as ViewDefault,
} from 'react-native';

import * as mixins from '@speech/styles/mixins';

import { Title as TitleBase, } from '@speech/styles/components';

export const View = Styled(ViewDefault)`
  ${mixins.flexGrow(1)}
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const Container = Styled(ViewDefault)`
  ${mixins.flexGrow(1)}
  align-items: center;
  justify-content: center;
  padding: 0px 10% 0px 10%;
`;

export const Title = TitleBase.extend`
  margin-bottom: 10px;
`;

export const Row = Styled(ViewDefault)`
  border-bottom: 1px solid grey;
  padding: 20px;
`;

export default StyleSheet.create({
  scrollView: {

  },
  scrollViewContent: {

  },
});
