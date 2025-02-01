import { passwordSchema } from "@/schema/password";
import { Formik } from "formik";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [password, setPassword] = useState<string>("");
  const [isPasswordGenerated, setIsPasswordGenerated] =
    useState<boolean>(false);

  const [lowercase, setLowercase] = useState<boolean>(true);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);

  const generatePassword = (passwordLength: number): void => {
    let characterList =
      !lowercase && !uppercase && !numbers && !symbols
        ? "wjdchJJHW*(&^E hdh"
        : "";

    const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-/?,.<>;:|[]{}";

    if (uppercase) {
      characterList += uppercaseCharacters;
    }

    if (lowercase) {
      characterList += lowercaseCharacters;
    }

    if (numbers) {
      characterList += digits;
    }

    if (symbols) {
      characterList += symbolChars;
    }

    setPassword(createPassword(characterList, passwordLength));
    setIsPasswordGenerated(true);
  };

  const createPassword = (
    characters: string,
    passwordLength: number
  ): string => {
    let result: string = "";

    for (let i = 0; i < passwordLength; i += 1) {
      const charIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(charIndex);
    }

    return result;
  };

  const resetPassword = () => {
    setPassword("");
    setIsPasswordGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.appContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Password Generator</Text>

        <Formik
          initialValues={{ passwordLength: "5" }}
          validationSchema={passwordSchema}
          onSubmit={(values, { setSubmitting }) => {
            generatePassword(Number(values.passwordLength));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
            handleReset,
            /* and other goodies */
          }) => (
            <>
              <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Password Length:</Text>
                  {errors.passwordLength && (
                    <Text style={styles.errorText}>
                      {errors.passwordLength}
                    </Text>
                  )}
                </View>
                <TextInput
                  style={styles.inputStyle}
                  value={values.passwordLength}
                  onChangeText={handleChange("passwordLength")}
                  placeholder="Eg. 6"
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include lowercase?</Text>

                <View>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={lowercase}
                    onPress={() => setLowercase(!lowercase)}
                    fillColor="#16C47F"
                  />
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include uppercase?</Text>

                <View>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor="#FF9D23"
                  />
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include numbers?</Text>

                <View>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#8D77AB"
                  />
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include symbols?</Text>

                <View>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#F93827"
                  />
                </View>
              </View>

              <View style={styles.formActions}>
                <TouchableOpacity style={styles.primaryBtn}>
                  <Text
                    disabled={
                      !isValid ||
                      (!lowercase && !uppercase && !numbers && !symbols)
                    }
                    style={styles.primaryBtnText}
                    onPress={() => handleSubmit()}
                  >
                    Generate Password
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryBtn}>
                  <Text
                    style={styles.secondaryBtnText}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}
                  >
                    Reset
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>

      {isPasswordGenerated && (
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.subTitle}>Result:</Text>
          <Text style={styles.description}>Long Press to copy</Text>
          <Text selectable style={styles.generatedPassword}>
            {password}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 2,
  },
  description: {
    color: "#758283",
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputColumn: {
    flexDirection: "column",
  },
  inputStyle: {
    padding: 8,
    width: "30%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#16213e",
  },
  errorText: {
    fontSize: 12,
    color: "#ff0d10",
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  primaryBtn: {
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#16C47F",
  },
  primaryBtnText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700",
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#3D3D3D",
  },
  secondaryBtnText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700",
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: "#ffffff",
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
    color: "#000",
  },
});
