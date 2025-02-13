import React, { useState } from "react";
import { Box, Flex, Heading, Text, Input, Button, VStack} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox"

function Verification() {
  const [formData, setFormData] = useState({
    FormNumber: "",
    Guardian: "",
    CNIC: "",
    FatherOrHusband: "",
    ContactNumber: "",
    Address: "",
    City: "",
    HouseArea: "",
    HouseType: "",
    HouseRent: "",
    MedicineExpense: "",
    ElectricityBill: "",
    Transport: "",
    NumOfMembers: "",
    TotalIncome: "",
    SourceOfIncome: "",
    FamilyDetails: "",
    VerifiedBy: "",
  });

  const [childrenData, setChildrenData] = useState([{
    name: "",
    age: "",
    studying: false,
    earning: false,
    instituteName: "",
    fees: "",
    className: "",
    sourceOfIncome: "",
    income: ""
  }]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChildrenChange = (e, index) => {
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
            <Text fontWeight="bold" color="black" fontSize={{ base: "10px", sm: "11px", md: "16px", lg: "18px" }}>
              Jane Smith
            </Text>
          </Box>
        </Flex>
        
        <VStack align="start">
          <Text color="black" cursor="pointer" _hover={{ color: "gray.400" }}>Dashboard</Text>
          <Text color="black" cursor="pointer" _hover={{ color: "gray.400" }}>Family List</Text>
          <Text color="black" cursor="pointer" _hover={{ color: "gray.400" }}>Volunteer List</Text>
          <Text color="black" cursor="pointer" _hover={{ color: "gray.400" }}>Donation List</Text>
          <Text color="black" cursor="pointer" _hover={{ color: "gray.400" }}>Setting</Text>
        </VStack>
      </Box>

      <Box flex="1" p={6} bg="gray.100" ml={["0%", "30%", "20%"]} height="100vh" overflowY="auto">
        <Heading size="lg" mb={6}>Verification Form</Heading>

        {/* Family Form */}
        <Box bg="white" p={6} borderRadius="lg" boxShadow="md" mt={6}>
          <VStack spacing={4} align="stretch">
            <Text color={'black'} fontSize={'30px'}>Family Form:</Text>
           
            <Box borderRadius="md">
              <Text>Form Number:</Text>
              <Input name="FormNumber" value={formData.FormNumber} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Guardian:</Text>
              <Input name="Guardian" value={formData.Guardian} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>CNIC:</Text>
              <Input name="CNIC" value={formData.CNIC} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Father or Husband:</Text>
              <Input name="FatherOrHusband" value={formData.FatherOrHusband} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Contact Number:</Text>
              <Input name="ContactNumber" value={formData.ContactNumber} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Address:</Text>
              <Input name="Address" value={formData.Address} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>City:</Text>
              <Input name="City" value={formData.City} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>House Area:</Text>
              <Input name="HouseArea" value={formData.HouseArea} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>House Type:</Text>
              <Input name="HouseType" value={formData.HouseType} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>House Rent:</Text>
              <Input name="HouseRent" value={formData.HouseRent} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Medicine Expense:</Text>
              <Input name="MedicineExpense" value={formData.MedicineExpense} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Electricity Bill:</Text>
              <Input name="ElectricityBill" value={formData.ElectricityBill} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Transport:</Text>
              <Input name="Transport" value={formData.Transport} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Number of Members:</Text>
              <Input name="NumOfMembers" value={formData.NumOfMembers} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Total Income:</Text>
              <Input name="TotalIncome" value={formData.TotalIncome} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Source of Income:</Text>
              <Input name="SourceOfIncome" value={formData.SourceOfIncome} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Family Details:</Text>
              <Input name="FamilyDetails" value={formData.FamilyDetails} onChange={handleChange} />
            </Box>
            <Box borderRadius="md">
              <Text>Verified By:</Text>
              <Input name="VerifiedBy" value={formData.VerifiedBy} onChange={handleChange} />
            </Box>



            <Box mt={4}>
              <Text color={'black'} fontSize={'20px'}>Children Section</Text>
              {childrenData.map((child, index) => (
                <Box key={index} p={4} borderRadius="md" mt={4}>
                  <Text>Name:</Text>
                  <Input name="name" value={child.name} onChange={(e) => handleChildrenChange(e, index)} />
                  <Text>Age:</Text>
                  <Input name="age" value={child.age} onChange={(e) => handleChildrenChange(e, index)} />
                  
                  {/* Studying Checkbox */}
                  <Checkbox
                    name="studying"
                    isChecked={child.studying}
                    onChange={(e) => handleCheckboxChange(e, index)}
                  >
                    Studying
                  </Checkbox>

                  {child.studying && (
                    <>
                      <Text>Institute Name:</Text>
                      <Input name="instituteName" value={child.instituteName} onChange={(e) => handleChildrenChange(e, index)} />
                      <Text>Fees:</Text>
                      <Input name="fees" value={child.fees} onChange={(e) => handleChildrenChange(e, index)} />
                      <Text>Class Name:</Text>
                      <Input name="className" value={child.className} onChange={(e) => handleChildrenChange(e, index)} />
                    </>
                  )}

                 
                  <Checkbox
                    name="earning"
                    isChecked={child.earning}
                    onChange={(e) => handleCheckboxChange(e, index)}
                  >
                    Earning
                  </Checkbox>

                  {child.earning && (
                    <>
                      <Text>Source of Income:</Text>
                      <Input name="sourceOfIncome" value={child.sourceOfIncome} onChange={(e) => handleChildrenChange(e, index)} />
                      <Text>Income:</Text>
                      <Input name="income" value={child.income} onChange={(e) => handleChildrenChange(e, index)} />
                    </>
                  )}
                </Box>
              ))}
            </Box>

            <Button colorScheme="blue" mt={4}>Submit</Button>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default Verification;
