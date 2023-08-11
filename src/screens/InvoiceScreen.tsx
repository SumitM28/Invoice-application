import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const InvoiceScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.navigate}>
          <Feather
            name="arrow-left-circle"
            size={25}
            color={'white'}
            onPress={() => navigation.navigate('Home')}
          />
        </Text>
        <Text style={styles.headerText}>Invoice</Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
          }}
          style={styles.headerImg}
        />
      </View>

      <View style={styles.invoiceContainer}>
        <Text style={styles.invoiceLable}>Details</Text>
        <View style={styles.invoiceDateCard}>
          <Text style={styles.textLight}>No. #10</Text>
          <Text style={styles.textDark}>Mar 02, 2023</Text>
          <Text style={styles.textLight}>Due on Mar 09,2023</Text>
        </View>

        <Text style={styles.invoiceLable}>Client</Text>
        <View style={styles.invoiceCard}>
          <View style={styles.lableIcon}>
            <Feather name="user" size={15} />
          </View>
          <Text style={styles.textDark}>+ Add client detils</Text>
        </View>

        <Text style={styles.invoiceLable}>Items</Text>
        <View style={styles.invoiceCard}>
          <View style={styles.lableIcon}>
            <Fontisto name="shopping-bag-1" size={15} />
          </View>
          <Text style={styles.textDark}>+ Add items</Text>
        </View>

        <Text style={styles.invoiceLable}>Total</Text>
        <View style={styles.invoiceCardSubtotal}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                letterSpacing: 0.4,
                fontWeight: '600',
                fontFamily: 'Open Sans_semibold',
                color: '#9497a6',
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                fontFamily: 'Open Sans_semibold',
                color: '#9497a6',
                textAlign: 'left',
              }}>
              ₹0.0
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                letterSpacing: 0.4,
                fontWeight: '600',
                fontFamily: 'Open Sans_semibold',
                color: '#9497a6',
              }}>
              Tax
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                fontFamily: 'Open Sans_semibold',
                color: '#9497a6',
                textAlign: 'left',
              }}>
              ₹0.0
            </Text>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#EEEEEE',
              width: '100%',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Text style={styles.textDark}>Total</Text>
            <Text style={styles.textDark}>₹0.0</Text>
          </View>
        </View>

        <Text style={styles.invoiceLable}>Note</Text>
        <View style={styles.invoiceCard}>
          <View style={styles.lableIcon}>
            <Foundation name="clipboard-notes" size={15} />
          </View>
          <Text style={styles.textDark}>+ Add note</Text>
        </View>

        <Text style={styles.invoiceLable}>Signature</Text>
        <View style={styles.invoiceCard}>
          <View style={styles.lableIcon}>
            <MaterialCommunityIcons name="draw-pen" size={15} />
          </View>
          <Text style={styles.textDark}>+ Add signature</Text>
        </View>

        <Text style={styles.invoiceLable}>Photo</Text>
        <View style={styles.invoiceCard}>
          <View style={styles.lableIcon}>
            <Feather name="image" size={15} />
          </View>
          <Text style={styles.textDark}>+ Add photo</Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.savebtnContainer}>
            <Text style={styles.btnSaveText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sharebtnContainer}>
            <Text style={styles.btnShareText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default InvoiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1c85e8',
    paddingHorizontal: 25,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navigate: {},
  headerText: {
    fontSize: 16,
    letterSpacing: 0,
    fontWeight: '800',
    fontFamily: 'Open Sans_extrabold',
    color: '#fff',
  },
  headerImg: {
    width: 48,
    height: 48,
    borderRadius: 31,
  },
  invoiceContainer: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  invoiceLable: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Open Sans_bold',
    color: '#8f93a4',
  },
  invoiceDateCard: {
    marginVertical: 15,
    padding: 11,
    borderRadius: 15,
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
  },
  textLight: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Open Sans_semibold',
    color: '#9497a6',
    textAlign: 'left',
  },
  textDark: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Open Sans_bold',
    color: '#374767',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  lableIcon: {
    paddingTop: 11,
    height: 35,
    width: 35,
    backgroundColor: '#ECF3FF',
    borderRadius: 31,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  invoiceCard: {
    marginVertical: 15,
    padding: 11,
    borderRadius: 15,
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
    flexDirection: 'row',
    alignContent: 'center',
    gap: 10,
  },
  invoiceCardSubtotal: {
    marginVertical: 15,
    padding: 11,
    borderRadius: 15,
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
    flexDirection: 'column',
  },
  btnContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 61,
  },
  btnSaveText: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Open Sans_extrabold',
    color: '#fff',
  },
  btnShareText: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Open Sans_extrabold',
    color: '#1C85E8',
  },
  savebtnContainer: {
    backgroundColor: '#1C85E8',
    paddingVertical: 14,
    paddingHorizontal: 59,
    borderRadius: 15,
  },
  sharebtnContainer: {
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: '#1c85e8',
    borderWidth: 1,
    paddingHorizontal: 59,
    paddingVertical: 14,
  },
});
