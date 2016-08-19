import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  numberStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  totalStyle: {
    fontSize: variables.font_size_display_sm,
    color: variables.color_text_base,
  },
  activeTextStyle: {
    fontSize: variables.font_size_display_sm,
    color: variables.color_link,
  },
  indicatorStyle: {
    flexDirection: 'row',
  },
  pointStyle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: variables.input_color_icon,
  },
  pointActiveStyle: {
    backgroundColor: '#888',
  },
  spaceLargeStyle: {
    marginRight: 4 * variables.h_spacing_sm,
  },
  spaceSmallStyle: {
    marginRight: variables.h_spacing_sm,
  },
});