import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { gradientStart, gradientEnd } from '../../constants/Colors';

const Header = ({ title, goBack, goNext }) => (
  <LinearGradient
    colors={[gradientStart, gradientEnd]}
    style={styles.linearGradient}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    {goBack && <Text style={styles.backButton} onPress={ () => goBack() }>
      back
    </Text>}

    <Text style={styles.heading}>{title}</Text>

    {goNext && <Text style={styles.backButton} onPress={ () => goNext() }>
      next
    </Text>}
  </LinearGradient>
);

const styles = StyleSheet.create({
  linearGradient: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 215,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  heading: {
    fontFamily: 'Open Sans',
    fontSize: 36,
    color: '#fff',
  }
});

export default Header;
