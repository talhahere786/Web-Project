import React, { useState } from "react";
import { Box, Flex, Heading, Text, Input, Button, VStack, SelectContent,
  SelectItem,
  SelectItemGroup,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom";
function Verification() {
  const [formData, setFormData] = useState({
    formNumber: "",
    guardian: "",
    cnic: "",
    fatherOrHusband: "",
    contactNumber: "",
    address: "",
    city: "",
    houseArea: "",
    houseType: "",
    houseRent: "",
    medicineExpense: "",
    electricityBill: "",
    transport: "",
    num_of_members: "",
    totalIncome: "",
    sourceOfIncome: "",
    familyDetails: "",
    verifiedBy: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // For error messages
  const [childrenData, setChildrenData] = useState([]);
  const [selectedChildren, setSelectedChildren] = useState(""); // Track selected value
  const childrenOptions = Array.from({ length: 10 }, (_, i) => ({
    label: `${i + 1} Children`,
    value: `${i + 1}`,
  }));
  // Handle number of children selection
  const handleChildrenCountChange = (value) => {
    console.log("inside count change");
    setSelectedChildren(value); // Update selected value

    const count = parseInt(value, 10) || 0;
    setChildrenData(
      Array.from({ length: count }, () => ({
        name: "",
        age: "",
        studying: false,
        earning: false,
        instituteName: "",
        fees: "",
        className: "",
        sourceOfIncome: "",
        income: "",
      }))
    );
  };

  const handleChange = (e) => {
    console.log("inside handle change");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChildrenChange = (e, index) => {
    console.log("inside handle children change");
    const { name, value } = e.target;
    const updatedChildren = [...childrenData];
    updatedChildren[index][name] = value;
    setChildrenData(updatedChildren);
  };

  const handleCheckboxChange = (e, index) => {
    const { name, checked } = e.target;
    const updatedChildren = [...childrenData];
    updatedChildren[index][name] = checked;
    setChildrenData(updatedChildren);
  };
  const handleSubmit = async () => {
    try {
      // Prepare the payload
      const payload = {
        ...formData,
        children: childrenData,
      };
      console.log("members:", formData.num_of_members);
      // Make a POST request to the backend
      const response = await fetch("http://localhost:5000/api/family", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Convert response to JSON
      const data = await response.json();

      // Handle success
      if (response.status === 201) {
        alert("Family and Children data saved successfully!");
        console.log("Saved Family:", data.family);
      } else {
        console.error("Backend Error Response:", data);
        setErrorMessage(data.message || "Form Submission failed. Please try again.");
      }
    } catch (error) {
      // Handle error
      console.error(
        "Error saving family and children in verification.jsx:",
        error
      );
      alert("Failed to save family and children data. Please try again.");
    }
  };

  return (
    <Flex>
      <Box
        w={["0%", "30%", "20%"]}
        position="fixed"
        height="100vh"
        bg="gray.200"
        p={5}
        display={["none", "flex", "flex"]}
        flexDirection="column"
      >
        <Flex alignItems="center" gap={4} mb={2}>
          <Avatar name="Jane Smith" src="https://bit.ly/sage-adebayo" />
          <Box>
            <Text
              fontWeight="bold"
              color="black"
              fontSize={{ base: "10px", sm: "11px", md: "16px", lg: "18px" }}
            >
              Jane Smith
            </Text>
          </Box>
        </Flex>

        <VStack align="start">
          <Text color="black" cursor="pointer" _hover={{ color: "gray.400" }}>
            Dashboard
          </Text>
          <Text color="black" cursor="pointer" _hover={{ color: "gray.400" }}>
            Family List
          </Text>
          <Text color="black" cursor="pointer" _hover={{ color: "gray.400" }}>
            Volunteer List
          </Text>
          <Text color="black" cursor="pointer" _hover={{ color: "gray.400" }}>
            Donation List
          </Text>
          <Text color="black" cursor="pointer" _hover={{ color: "gray.400" }}>
            Setting
          </Text>
        </VStack>
      </Box>

      <Box
        flex="1"
        p={6}
        bg="gray.100"
        ml={["0%", "30%", "20%"]}
        height="100vh"
        overflowY="auto"
        color={"black"}
      >
        <Heading size="lg" mb={6}>
          Verification Form
        </Heading>

        {/* Family Form */}
        <Box bg="white" p={6} borderRadius="lg" boxShadow="md" mt={6} color={"black"}>
          <VStack spacing={4} align="stretch">
            <Text color={"black"} fontSize={"30px"}>
              Family Form:
            </Text>

            <Box borderRadius="md">
              <Text>Form Number:</Text>
              <Input
                name="formNumber"
                value={formData.formNumber}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Guardian:</Text>
              <Input
                name="guardian"
                value={formData.guardian}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>CNIC:</Text>
              <Input
                name="cnic"
                value={formData.cnic}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Father or Husband:</Text>
              <Input
                name="fatherOrHusband"
                value={formData.fatherOrHusband}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Contact Number:</Text>
              <Input
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Address:</Text>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>City:</Text>
              <Input
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>House Area:</Text>
              <Input
                name="houseArea"
                value={formData.houseArea}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>House Type:</Text>
              <Input
                name="houseType"
                value={formData.houseType}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>House Rent:</Text>
              <Input
                name="houseRent"
                value={formData.houseRent}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Medicine Expense:</Text>
              <Input
                name="medicineExpense"
                value={formData.medicineExpense}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Electricity Bill:</Text>
              <Input
                name="electricityBill"
                value={formData.electricityBill}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Transport:</Text>
              <Input
                name="transport"
                value={formData.transport}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Number of Members:</Text>
              <Input
                name="num_of_members"
                value={formData.num_of_members}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Total Income:</Text>
              <Input
                name="totalIncome"
                value={formData.totalIncome}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Source of Income:</Text>
              <Input
                name="sourceOfIncome"
                value={formData.sourceOfIncome}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Family Details:</Text>
              <Input
                name="familyDetails"
                value={formData.familyDetails}
                onChange={handleChange}
              />
            </Box>
            <Box borderRadius="md">
              <Text>Verified By:</Text>
              <Input
                name="verifiedBy"
                value={formData.verifiedBy}
                onChange={handleChange}
              />
            </Box>

            <Box mt={4}>
              <Text color={"black"} fontSize={"20px"}>
                Children Section
              </Text>
              {/* Select number of children */}
              <Box w="320px">
                <SelectRoot>
                  <SelectLabel>Select Number of Children</SelectLabel>
                  <SelectTrigger>
                    <SelectValueText>
                      {selectedChildren && selectedChildren !== ""
                        ? `${selectedChildren} Children`
                        : "Select number"}
                    </SelectValueText>
                  </SelectTrigger>
                  <SelectContent color={"white"}>
                    {childrenOptions.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={item.value}
                        onClick={() => {
                          console.log("Clicked Item:", item.value);
                          handleChildrenCountChange(item.value); // Manually update here
                        }}
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Box>

              {/* Show Children Input Fields if Selected */}
              {childrenData.length > 0 &&
                childrenData.map((child, index) => (
                  <Box key={index} borderRadius="md" mt={4}>
                    <Text>Name:</Text>
                    <Input
                      name="name"
                      value={child.name}
                      onChange={(e) => handleChildrenChange(e, index)}
                    />
                    <Text>Age:</Text>
                    <Input
                      name="age"
                      value={child.age}
                      onChange={(e) => handleChildrenChange(e, index)}
                    />

                    {/* Studying Checkbox */}
                    <Checkbox
                      name="studying"
                      ischecked={child.studying}
                      onChange={(e) => handleCheckboxChange(e, index)}
                      mt={4}
                      mr={2}
                    >
                      Studying
                    </Checkbox>

                    {child.studying && (
                      <>
                        <Text>Institute Name:</Text>
                        <Input
                          name="instituteName"
                          value={child.instituteName}
                          onChange={(e) => handleChildrenChange(e, index)}
                        />
                        <Text>Fees:</Text>
                        <Input
                          name="fees"
                          value={child.fees}
                          onChange={(e) => handleChildrenChange(e, index)}
                        />
                        <Text>Class Name:</Text>
                        <Input
                          name="className"
                          value={child.className}
                          onChange={(e) => handleChildrenChange(e, index)}
                        />
                      </>
                    )}

                    <Checkbox
                      name="earning"
                      ischecked={child.earning}
                      onChange={(e) => handleCheckboxChange(e, index)}
                      mt={4}
                    >
                      Earning
                    </Checkbox>

                    {child.earning && (
                      <>
                        <Text>Source of Income:</Text>
                        <Input
                          name="sourceOfIncome"
                          value={child.sourceOfIncome}
                          onChange={(e) => handleChildrenChange(e, index)}
                        />
                        <Text>Income:</Text>
                        <Input
                          name="income"
                          value={child.income}
                          onChange={(e) => handleChildrenChange(e, index)}
                        />
                      </>
                    )}
                  </Box>
                ))}
            </Box>

            <Button colorScheme="blue" mt={4} onClick={handleSubmit}>
              Submit
            </Button>
          </VStack>
          {errorMessage && <Text color="red.500">{errorMessage}</Text>}
        </Box>
      </Box>
    </Flex>
  );
}

export default Verification;
