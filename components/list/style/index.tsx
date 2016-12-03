import { StyleSheet } from 'react-native';
import variables from '../../style/themes/default';

export default {
  underlayColor: variables.fill_tap,
  Header: {
    fontSize: variables.font_size_base,
    color: variables.color_text_caption,
    paddingLeft: variables.h_spacing_lg,
    paddingRight: variables.h_spacing_lg,
    paddingTop: variables.v_spacing_lg,
    paddingBottom: variables.v_spacing_md,
    backgroundColor: variables.fill_body,
  },
  Footer: {
    fontSize: variables.font_size_base,
    color: variables.color_text_caption,
    paddingLeft: variables.h_spacing_lg,
    paddingRight: variables.h_spacing_lg,
    paddingTop: variables.v_spacing_md,
    paddingBottom: variables.v_spacing_md,
    backgroundColor: variables.fill_body,
  },
  Body: {
    backgroundColor: variables.fill_base,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: variables.border_color_base,
  },
  BodyBottomLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: variables.fill_base,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.border_color_base,
  },
  Item: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: variables.h_spacing_lg,
    backgroundColor: variables.fill_base,
  },
  Line: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingRight: variables.h_spacing_lg,
    paddingTop: 0,
    paddingBottom: 0,
    minHeight: variables.list_item_height,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.border_color_base,
  },
  Thumb: {
    width: variables.icon_size_md,
    height: variables.icon_size_md,
    marginRight: variables.h_spacing_lg,
  },
  Content: {
    color: variables.color_text_base,
    fontSize: variables.font_size_heading,
  },
  Extra: {
    color: variables.color_text_caption,
    fontSize: variables.font_size_heading,
    textAlign: 'right',
  },
  Brief: {
    marginTop: variables.v_spacing_sm,
    height: variables.font_size_subhead,
  },
  BriefText: {
    color: variables.color_text_caption,
    fontSize: variables.font_size_subhead,
  },
  Arrow: {
    width: 8,
    height: 13,
    marginLeft: variables.h_spacing_md,
  },
  ArrowV: {
    width: 13,
    height: 8,
    marginLeft: variables.h_spacing_md,
  },
  Error: {
    Body: {
      borderTopColor: 'red',
    },
    Item: {
      borderBottomColor: 'red',
    },
    Line: {
      borderBottomColor: 'red',
    },
  },
  Last: {
    Item: {
      borderBottomWidth: 0,
      borderBottomColor: variables.border_color_base,
    },
    Line: {
      borderBottomWidth: 0,
    },
  },
  multipleLine: {
    Line: {
      paddingTop: variables.v_spacing_lg,
      paddingBottom: variables.v_spacing_lg,
    },
    Thumb: {
      width: variables.icon_size_lg,
      height: variables.icon_size_lg,
    },
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
};
