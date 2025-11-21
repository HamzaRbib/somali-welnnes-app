import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Card,
} from "@heroui/react";

const initialAddresses = [
  { id: "home", label: "Home", address: "Mogadishu, Somalia Street" },
  { id: "family", label: "Family home", address: "Mecca, Medina Street" },
];

export default function AddressDropdown() {
  const [addresses, setAddresses] = React.useState(initialAddresses);
  const [selectedKeys, setSelectedKeys] = React.useState(() => new Set(["home"]));
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: "",
    city: "",
    state: "",
    streetAddress: "",
  });

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys)[0],
    [selectedKeys]
  );

  const selected =
    addresses.find((a) => a.id === selectedValue) || addresses[0];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    // Validate form
    if (
      !formData.title ||
      !formData.city ||
      !formData.state ||
      !formData.streetAddress
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Create new address
    const newAddress = {
      id: `address-${Date.now()}`,
      label: formData.title,
      address: `${formData.streetAddress}, ${formData.city}, ${formData.state}`,
    };

    // Add to addresses list
    setAddresses((prev) => [...prev, newAddress]);

    // Select the newly added address
    setSelectedKeys(new Set([newAddress.id]));

    // Reset form and close modal
    setFormData({
      title: "",
      city: "",
      state: "",
      streetAddress: "",
    });
    setIsOpen(false);
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      city: "",
      state: "",
      streetAddress: "",
    });
    setIsOpen(false);
  };

  return (
    <>
      <div style={{ maxWidth: 360 }}>
        {/* Dropdown trigger */}
        <Dropdown key={selectedValue}>
          <DropdownTrigger disableRipple>
            <Button
              variant="light"
              className="border-0 w-100 d-flex justify-content-between align-items-center py-3"
              style={{ borderRadius: "14px" }}
            >
              <div className="d-flex align-items-center gap-2">
                <img
                  src="/assets/imgs/theme/icons/location-user.svg"
                  alt="icon"
                />
                <div className="text-start">
                  <div className="fw-semibold">{selected.label}</div>
                  <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                    {selected.address}
                  </div>
                </div>
                <i
                  className="fi fi-rs-angle-small-down align-self-end"
                  style={{ fontSize: "18px", color: "#78A33F" }}
                ></i>
              </div>
            </Button>
          </DropdownTrigger>

          {/* Dropdown menu list */}
          <DropdownMenu
            disallowEmptySelection
            aria-label="Select shipping address"
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            className="p-2 bg-white"
            style={{ width: "320px", borderRadius: "14px" }}
            itemClasses={{
              base: "p-0 gap-0 data-[selected=true]:bg-transparent",
              selectedIcon: "hidden",
            }}
          >
            {addresses.map((item) => (
              <DropdownItem key={item.id}>
                <Card
                  className={`w-100 border-light shadow-sm p-3 ${
                    selectedKeys.has(item.id) ? "border-success" : ""
                  }`}
                  style={{ borderRadius: "12px", cursor: "pointer" }}
                >
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src="/assets/imgs/theme/icons/location-user.svg"
                        alt="icon"
                      />
                      <div>
                        <div className="fw-semibold">{item.label}</div>
                        <div
                          className="text-muted"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {item.address}
                        </div>
                      </div>
                    </div>
                    {selectedKeys.has(item.id) && (
                      <i
                        className="fi fi-rs-check"
                        style={{ fontSize: "16px", color: "#78A33F" }}
                      ></i>
                    )}
                  </div>
                </Card>
              </DropdownItem>
            ))}

            {/* Add new shipping address */}
            <DropdownItem key="new" onPress={() => setIsOpen(true)}>
              <button
                className="w-100 add-new-address-btn py-2 my-2"
                style={{ borderStyle: "dashed", borderRadius: "12px" }}
              >
                + Add New Shipping Address
              </button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      {/* Add New Address Modal */}
      {isOpen && (
        <div className="add-new-address-modal">
          <div
            className="add-new-address-model__overlay"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="add-new-address-modal__content">
            <div className="add-new-address-modal__header">
              <h3>Add a new address</h3>
              <button onClick={() => setIsOpen(false)}>
                <i className="fi fi-rs-cross"></i>
              </button>
            </div>
            <div className="add-new-address-modal__body">
              <div>
                <div className="form-group">
                  <label htmlFor="title" className="fw-bold">Title *</label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Enter your Title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city" className="fw-bold">City *</label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter your City"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state" className="fw-bold">State *</label>
                  <input
                    type="text"
                    id="state"
                    placeholder="Enter your State"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="streetAddress" className="fw-bold">Street Address *</label>
                  <input
                    type="text"
                    id="streetAddress"
                    placeholder="Enter your Street Address"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-btns">
                  <button onClick={handleSubmit} type="submit">Add address</button>
                  <button className="cancel-btn" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
