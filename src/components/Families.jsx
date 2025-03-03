import React, { useState } from "react";
import { Table } from "@chakra-ui/react";
import { Box, Flex, Heading, Text, Input, Button, VStack } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";

function Families() {
  const [tableData, setTableData] = useState([
    { name: "James Smith", address: "123 Main St, NY", verificationDate: "16/02/2024", status: "Active", isEditing: false, tempName: "", tempAddress: "", tempVerificationDate: "", tempStatus: "" },
    { name: "Sarah Johnson", address: "456 Oak St, CA", verificationDate: "17/02/2024", status: "Inactive", isEditing: false, tempName: "", tempAddress: "", tempVerificationDate: "", tempStatus: "" },
    { name: "Michael Brown", address: "789 Pine St, TX", verificationDate: "18/02/2024", status: "Active", isEditing: false, tempName: "", tempAddress: "", tempVerificationDate: "", tempStatus: "" },
    { name: "Emily Davis", address: "321 Maple St, FL", verificationDate: "19/02/2024", status: "Inactive", isEditing: false, tempName: "", tempAddress: "", tempVerificationDate: "", tempStatus: "" },
    { name: "Daniel Martinez", address: "654 Birch St, WA", verificationDate: "20/02/2024", status: "Active", isEditing: false, tempName: "", tempAddress: "", tempVerificationDate: "", tempStatus: "" },
    { name: "Olivia Garcia", address: "987 Cedar St, IL", verificationDate: "21/02/2024", status: "Inactive", isEditing: false, tempName: "", tempAddress: "", tempVerificationDate: "", tempStatus: "" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleDelete = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setTableData((prevData) =>
      prevData.map((row, i) =>
        i === index ? { 
          ...row, 
          isEditing: true, 
          tempName: row.name, 
          tempAddress: row.address,
          tempVerificationDate: row.verificationDate,
          tempStatus: row.status
        } : row
      )
    );
  };

  const handleSave = () => {
    setTableData((prevData) =>
      prevData.map((row, i) =>
        i === editingIndex ? { 
          ...row, 
          name: row.tempName, 
          address: row.tempAddress, 
          verificationDate: row.tempVerificationDate, 
          status: row.tempStatus, 
          isEditing: false 
        } : row
      )
    );
    setEditingIndex(null);  // Close the pop-up after saving
  };

  const handleChange = (index, key, value) => {
    setTableData((prevData) =>
      prevData.map((row, i) => (i === index ? { ...row, [key]: value } : row))
    );
  };

  const filteredData = tableData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "" || row.status === statusFilter)
  );

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        w="20%"
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
            Manage Family
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

      {/* Main Content */}
      <Flex
        direction="column"
        py={3}
        ml={["0%", "20%"]}
        w={["100%", "80%"]}
        px={4}
        bg="white"
        h={["100%", "100%"]}
      >
        <Heading fontSize={{ base: "lg", md: "xl" }} color="black">
          Families
        </Heading>

        {/* Status Filter Buttons */}
        <Box mt={2} display="flex" flexWrap="wrap">
          <Button
            bg={statusFilter === "Active" ? "gray.400" : "gray.200"}
            color="black"
            px={2}
            py={1}
            mx={1}
            my={1}
            onClick={() =>
              setStatusFilter(statusFilter === "Active" ? "" : "Active")
            }
          >
            Active
          </Button>
          <Button
            bg={statusFilter === "Inactive" ? "gray.400" : "gray.200"}
            color="black"
            px={2}
            py={1}
            mx={1}
            my={1}
            onClick={() =>
              setStatusFilter(statusFilter === "Inactive" ? "" : "Inactive")
            }
          >
            Inactive
          </Button>
        </Box>

        {/* Search Input */}
        <Box mb={4} w={{ base: "100%", md: "60%" }}>
          <Input
            placeholder="Search families by name"
            bg="gray.100"
            my={4}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>

        {/* Table */}
        <Box bg="white" borderRadius="md" boxShadow="md" p={4} overflowX="auto">
          <Table.Root size="sm" minW="600px">
            <Table.Header>
              <Table.Row backgroundColor="white">
                <Table.ColumnHeader color="black">Name</Table.ColumnHeader>
                <Table.ColumnHeader color="black">Address</Table.ColumnHeader>
                <Table.ColumnHeader color="black">
                  Verification Date
                </Table.ColumnHeader>
                <Table.ColumnHeader color="black">Status</Table.ColumnHeader>
                <Table.ColumnHeader
                  color="black"
                  textAlign="center"
                  // display="flex"
                  // justifyContent="center"
                >
                  Actions
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filteredData.map((row, index) => (
                <Table.Row key={index} backgroundColor="white" color={"black"}>
                  <Table.Cell>
                    {row.isEditing ? (
                      <Input
                        value={row.tempName}
                        onChange={(e) =>
                          handleChange(index, "tempName", e.target.value)
                        }
                      />
                    ) : (
                      <Text color="black" fontSize={{ base: "xs", md: "sm" }}>
                        {row.name}
                      </Text>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    {row.isEditing ? (
                      <Input
                        value={row.tempAddress}
                        onChange={(e) =>
                          handleChange(index, "tempAddress", e.target.value)
                        }
                      />
                    ) : (
                      <Text color="black" fontSize={{ base: "xs", md: "sm" }}>
                        {row.address}
                      </Text>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    {row.isEditing ? (
                      <Input
                        value={row.tempVerificationDate}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "tempVerificationDate",
                            e.target.value
                          )
                        }
                      />
                    ) : (
                      <Text color="black" fontSize={{ base: "xs", md: "sm" }}>
                        {row.verificationDate}
                      </Text>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    {row.isEditing ? (
                      <Input
                        value={row.tempStatus}
                        onChange={(e) =>
                          handleChange(index, "tempStatus", e.target.value)
                        }
                      />
                    ) : (
                      <Button
                        bg="gray.300"
                        color="black"
                        w={{ base: "60px", md: "80px" }}
                        p={1}
                        fontSize={{ base: "xs", md: "sm" }}
                      >
                        {row.status}
                      </Button>
                    )}
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    {row.isEditing ? (
                      <Button
                        bg="gray.300"
                        color="black"
                        fontSize={{ base: "xs", md: "sm" }}
                        mx={1}
                        onClick={handleSave}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        my={2}
                        bg="gray.300"
                        color="black"
                        fontSize={{ base: "xs", md: "sm" }}
                        mx={1}
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </Button>
                    )}
                    <Button
                      my={2}
                      bg="gray.300"
                      color="black"
                      fontSize={{ base: "xs", md: "sm" }}
                      mx={1}
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Flex>

      {/* Pop-up Form for Editing */}
      {editingIndex !== null && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            bg="white"
            p={5}
            borderRadius="md"
            boxShadow="lg"
            width="400px"
            display="flex"
            flexDirection="column"
          >
            <Button
              position="absolute"
              top={2}
              right={2}
              onClick={() => setEditingIndex(null)}
            />
            <Heading fontSize="lg" mb={4} color="black">
              Edit Family
            </Heading>
            <VStack spacing={4} align="stretch" color={"black"}>
              <Input
                value={tableData[editingIndex].tempName}
                onChange={(e) =>
                  handleChange(editingIndex, "tempName", e.target.value)
                }
                placeholder="Name"
                color={"black"}
              />
              <Input
                value={tableData[editingIndex].tempAddress}
                onChange={(e) =>
                  handleChange(editingIndex, "tempAddress", e.target.value)
                }
                placeholder="Address"
              />
              <Input
                value={tableData[editingIndex].tempVerificationDate}
                onChange={(e) =>
                  handleChange(
                    editingIndex,
                    "tempVerificationDate",
                    e.target.value
                  )
                }
                placeholder="Verification Date"
              />
              <Input
                value={tableData[editingIndex].tempStatus}
                onChange={(e) =>
                  handleChange(editingIndex, "tempStatus", e.target.value)
                }
                placeholder="Status"
              />
              <Button onClick={handleSave} colorScheme="blue" w="100%">
                Save Changes
              </Button>
            </VStack>
          </Box>
        </Box>
      )}
    </Flex>
  );
}

export default Families;
