import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.nofocus}>We haven't focused on anything yet 😢</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}> • {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on 🏆:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    flex:1//allowed us to scroll
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingBottom: spacing.sm,
  },
  nofocus:{
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    padding: spacing.lg,

  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    paddingBottom: spacing.sm,
  },
});
