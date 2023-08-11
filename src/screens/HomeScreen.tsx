import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={['#FFFFFF', '#1C85E8']}
          useAngle={true}
          angle={189.88}
          style={styles.linearGradientLeft}
          key={1}
        />
        <LinearGradient
          colors={['#FFFFFF', '#1C85E8']}
          useAngle={true}
          angle={189.88}
          style={styles.linearGradientRight}
          key={2}
        />

        <View style={styles.invoiceHeader}>
          <Text style={styles.invoiceText}>Invoice</Text>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            }}
            style={styles.profileImg}
          />
        </View>

        <View style={styles.main}>
          <View style={styles.mainLeft}>
            <Text style={styles.mainTextTop}>Amout Raised</Text>
            <View style={styles.mainTextMargin}>
              <Text style={styles.mainTextBottom}>₹10,000</Text>
            </View>
          </View>

          <View style={styles.mainRight}>
            <Text style={styles.mainTextTop}>Amout Paid</Text>
            <View style={styles.mainTextMargin}>
              <Text style={styles.mainTextBottom}>₹5,000</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.invoiceContainer}>
        {/* recent and view all */}
        <View style={styles.invoiceTextContainer}>
          <Text style={styles.invoiceTextLeft}>Recent</Text>
          <Text style={styles.invoiceTextRight}>View all</Text>
        </View>

        {/* invoice cards */}
        <View style={styles.invoiceInnerContainer}>
          <View style={styles.invoiceCardContainer}>
            <View style={styles.invoiceCardLeftContainer}>
              <Text style={styles.invoiceLeftCardText}>No. #10</Text>
              <Text style={styles.invoiceLeftCardText}>Mar 02,2023</Text>
              <Text style={styles.invoiceCardSavedText}>Saved</Text>
            </View>
            <View style={styles.invoiceCardRightContainer}>
              <Text style={styles.invoiceRightCardText}>Loreum Ipsum</Text>
              <Text style={styles.invoicePriceText}>₹100.0</Text>
              <Text style={styles.invoiceRightCardText}>Due in 4 days</Text>
            </View>
          </View>
          <View style={styles.invoiceCardContainer}>
            <View style={styles.invoiceCardLeftContainer}>
              <Text style={styles.invoiceLeftCardText}>No. #10</Text>
              <Text style={styles.invoiceLeftCardText}>Mar 02,2023</Text>
              <Text style={styles.invoiceCardSavedText}>Saved</Text>
            </View>
            <View style={styles.invoiceCardRightContainer}>
              <Text style={styles.invoiceRightCardText}>Loreum Ipsum</Text>
              <Text style={styles.invoicePriceText}>₹100.0</Text>
              <Text style={styles.invoiceRightCardText}>Due in 4 days</Text>
            </View>
          </View>
          <View style={styles.invoiceCardContainer}>
            <View style={styles.invoiceCardLeftContainer}>
              <Text style={styles.invoiceLeftCardText}>No. #10</Text>
              <Text style={styles.invoiceLeftCardText}>Mar 02,2023</Text>
              <Text style={styles.invoiceCardSavedText}>Saved</Text>
            </View>
            <View style={styles.invoiceCardRightContainer}>
              <Text style={styles.invoiceRightCardText}>Loreum Ipsum</Text>
              <Text style={styles.invoicePriceText}>₹100.0</Text>
              <Text style={styles.invoiceRightCardText}>Due in 4 days</Text>
            </View>
          </View>
        </View>

        {/* button */}
        <TouchableOpacity
          style={styles.invoiceBtnContainer}
          onPress={() => navigation.navigate('Invoice')}>
          <Text style={styles.invoiceBtnText}>+ Create new invoice</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    height: 207,
    backgroundColor: '#1C85E8',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    position: 'relative',
    paddingHorizontal: 25,
  },
  linearGradientLeft: {
    width: 163,
    height: 64.7,
    borderRadius: 31,
    position: 'absolute',
    left: -60,
    top: -30,
    transform: [
      {
        rotate: '25.31deg',
      },
    ],
    backgroundColor: 'transparent',
  },
  linearGradientRight: {
    width: 163,
    height: 64.7,
    borderRadius: 31,
    position: 'absolute',
    right: -91,
    bottom: 50,
    transform: [
      {
        rotate: '-160deg',
      },
    ],
    backgroundColor: 'transparent',
  },
  invoiceHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  invoiceText: {
    fontSize: 16,
    letterSpacing: 0,
    fontWeight: '800',
    fontFamily: 'Open Sans_extrabold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 12,
  },
  profileImg: {
    width: 48,
    height: 48,
    position: 'absolute',
    right: 0,
    borderRadius: 31,
    objectFit: 'cover',
  },
  main: {
    marginTop: 85,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    // flex: 1,
    width: '100%',
    height: 148,
    padding: 11,
    flexDirection: 'row',
  },
  mainLeft: {
    borderRadius: 15,
    backgroundColor: '#bfd8ff',
    shadowColor: 'rgba(191, 216, 255, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    flex: 1,
    width: 181,
    height: 126,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainRight: {
    width: 150,
    height: 126,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTextTop: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Open Sans_semibold',
    color: '#8f93a4',
    textAlign: 'center',
  },
  mainTextMargin: {
    marginTop: 15,
  },
  mainTextBottom: {
    fontSize: 26,
    fontWeight: '600',
    fontFamily: 'Open Sans_semibold',
    color: '#374767',
    textAlign: 'left',
  },
  invoiceContainer: {
    paddingHorizontal: 25,
    marginTop: 90,
  },
  invoiceTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  invoiceTextLeft: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Open Sans_bold',
    color: '#8f93a4',
  },
  invoiceTextRight: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Open Sans_semibold',
    color: '#374767',
  },
  invoiceInnerContainer: {
    marginTop: 17,
    gap: 15,
  },
  invoiceCardContainer: {
    padding: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: 'rgba(191, 216, 255, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: '#e3f2ff',
    borderWidth: 0.5,
    width: '100%',
    height: 90,
  },
  invoiceCardLeftContainer: {
    justifyContent: 'flex-start',
    gap: 7,
  },
  invoiceCardRightContainer: {
    gap: 7,
  },
  invoiceCardSavedText: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#bfd8ff',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Open Sans_regular',
    color: '#9497a6',
    paddingHorizontal: 13,
    paddingVertical: 2,
  },
  invoiceLeftCardText: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Open Sans_semibold',
    color: '#9497a6',
    textAlign: 'left',
  },
  invoicePriceText: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Open Sans_semibold',
    color: '#374767',
    textAlign: 'right',
  },
  invoiceRightCardText: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Open Sans_semibold',
    color: '#9497a6',
    textAlign: 'right',
  },

  invoiceBtnContainer: {
    marginTop: 88,
    backgroundColor: '#1c85e8',
    paddingHorizontal: 79,
    paddingVertical: 13,
    borderRadius: 15,
    marginBottom: 78,
  },
  invoiceBtnText: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Open Sans_extrabold',
    color: '#fff',
    textAlign: 'left',
  },
});
