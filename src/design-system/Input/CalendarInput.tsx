import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { formatDOB } from 'utils';
import dayjs from 'dayjs';
import { styles } from './styles';

interface CalendarProps {
  onChangeValue?: (val: string | Date) => void;
}

const CalendarInput = ({ onChangeValue }: CalendarProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View>
      <DatePicker
        modal
        mode="date"
        theme="light"
        open={showModal}
        date={selectedDate}
        onConfirm={(date: any) => {
          setShowModal(false);
          setIsSelected(true);
          setSelectedDate(date);
          onChangeValue && onChangeValue(dayjs(date).format('YYYY-MM-DD'));
        }}
        onCancel={() => {
          setShowModal(false);
        }}
      />
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text style={[styles.textInput, isSelected && styles.placeholderText]}>
          {!isSelected ? 'Choose date' : `${formatDOB(selectedDate)}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarInput;
