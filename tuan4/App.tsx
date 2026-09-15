import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Bai9 from './components/Bai9';
import Bai10 from './components/Bai10';
import Bai11 from './components/Bai11';
import Bai12 from './components/Bai12';
import Bai13 from './components/Bai13';
import Bai14 from './components/Bai14';
import Bai15 from './components/Bai15';

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  const exercises = [
    { id: 9, title: 'Bài 9' },
    { id: 10, title: 'Bài 10' },
    { id: 11, title: 'Bài 11' },
    { id: 12, title: 'Bài 12' },
    { id: 13, title: 'Bài 13' },
    { id: 14, title: 'Bài 14' },
    { id: 15, title: 'Bài 15' },
  ];

  const renderExercise = () => {
    switch (selectedExercise) {
      case 9:
        return <Bai9 />;
      case 10:
        return <Bai10 />;
      case 11:
        return <Bai11 />;
      case 12:
        return <Bai12 />;
      case 13:
        return <Bai13 />;
      case 14:
        return <Bai14 />;
      case 15:
        return <Bai15 />;
      default:
        return (
          <View style={styles.welcome}>
            <Text style={styles.welcomeText}>
              Chọn một bài tập để bắt đầu
            </Text>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>

      {/* MENU */}
      <View style={styles.menu}>
        <Text style={styles.menuTitle}>BÀI TẬP</Text>

        <View style={styles.menuList}>
          {exercises.map((exercise) => (
            <TouchableOpacity
              key={exercise.id}
              style={[
                styles.menuItem,
                selectedExercise === exercise.id &&
                  styles.menuItemActive,
              ]}
              onPress={() => setSelectedExercise(exercise.id)}
            >
              <Text
                style={[
                  styles.menuText,
                  selectedExercise === exercise.id &&
                    styles.menuTextActive,
                ]}
              >
                {exercise.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* NỘI DUNG */}
      <View style={styles.content}>
        {selectedExercise !== null && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedExercise(null)}
          >
            <Text style={styles.backText}>← Quay lại</Text>
          </TouchableOpacity>
        )}

        {renderExercise()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // ================= MENU =================

  menu: {
    backgroundColor: '#1e293b',
    paddingTop: 45,
    paddingBottom: 15,
  },

  menuTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },

  // Chia thành nhiều dòng
  menuList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 8,
    gap: 8,
  },

  menuItem: {
    width: '22%',
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#334155',
    alignItems: 'center',
  },

  menuItemActive: {
    backgroundColor: '#3b82f6',
  },

  menuText: {
    color: '#cbd5e1',
    fontSize: 14,
  },

  menuTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // ================= CONTENT =================

  content: {
    flex: 1,
    padding: 20,
  },

  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 8,
    marginBottom: 15,
  },

  backText: {
    color: '#334155',
    fontSize: 14,
    fontWeight: '600',
  },

  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeText: {
    fontSize: 18,
    color: '#64748b',
    textAlign: 'center',
  },
});
