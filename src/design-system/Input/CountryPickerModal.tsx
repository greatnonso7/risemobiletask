import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './styles';
import { CountryPickerModalProps, PhoneCountry } from './types';
import { countryList } from 'data';
import { BaseModal } from 'design-system/BaseModal';
import { hp } from 'constants/layout';
import FuzzySearch from 'fuzzy-search';

const CountryPickerModal = ({
  isVisible,
  onCloseModal,
  onComplete,
}: CountryPickerModalProps) => {
  const [searchResults, setSearchResults] = useState<PhoneCountry[]>([]);
  const [searchFocused, setSearchFocused] = useState(false);

  const onSearch = (val: string) => {
    const searcher = new FuzzySearch(countryList, ['name'], {
      caseSensitive: false,
    });

    const result = searcher.search(val);
    setSearchResults(result as any);
  };

  const renderList: PhoneCountry[] = searchFocused
    ? searchResults
    : countryList;

  return (
    <BaseModal visible={isVisible} onClose={() => onCloseModal()}>
      <View style={styles.countryListContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Country"
          onFocus={() => setSearchFocused(true)}
          onChangeText={(text: any) => onSearch(text)}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: hp(200) }}
          data={renderList}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => onComplete && onComplete(item)}
                key={index}
                style={styles.singleCountryContainer}>
                <Text style={styles.emojiFlag}>{item.flag}</Text>
                <Text style={styles.countryName}>{item.name}</Text>
                <Text style={styles.countryCode}>({item.dial_code})</Text>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No matching country</Text>
              </View>
            );
          }}
        />
      </View>
    </BaseModal>
  );
};

export default CountryPickerModal;
