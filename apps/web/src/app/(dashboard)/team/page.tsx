"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Table from "@/components/ui/Table";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";

const initialMembers = [
  {
    name: "Anjali Gupta",
    email: "anjali@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Manager",
    status: "Active",
  },
  {
    name: "Priya Singh",
    email: "priya@example.com",
    role: "Member",
    status: "Pending",
  },
];

export default function TeamPage() {

  const [members, setMembers] = useState(initialMembers);

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const handleInvite = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    setMembers((previous) => [
      ...previous,
      {
        name,
        email,
        role: "Member",
        status: "Pending",
      },
    ]);

    setName("");
    setEmail("");
    setOpen(false);
    setMessage("Demo team member added successfully.");
  };

  const rows = members.map((member) => [
    member.name,
    member.email,
    member.role,
    member.status === "Active" ? (
      <span className="text-green-600 font-medium">Active</span>
    ) : (
      <span className="text-orange-500 font-medium">Pending</span>
    ),
  ]);

  return (
    <div className="space-y-6">

      <div className="flex flex-wrap justify-between items-center gap-4">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Team Members
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your workspace team.
          </p>
        </div>

        <Button onClick={() => setOpen(true)}>
          + Invite Member
        </Button>

      </div>

      {message && (
        <p className="text-green-600 text-sm">{message}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <Card title="Total Members">
          <h2 className="text-3xl font-bold">{members.length}</h2>
        </Card>

        <Card title="Active Members">
          <h2 className="text-3xl font-bold">
            {members.filter((m) => m.status === "Active").length}
          </h2>
        </Card>

        <Card title="Pending Invitations">
          <h2 className="text-3xl font-bold">
            {members.filter((m) => m.status === "Pending").length}
          </h2>
        </Card>

      </div>

      <Card title="All Team Members">

        <Table
          headers={["Name", "Email", "Role", "Status"]}
          rows={rows}
        />

      </Card>

      <Modal
        open={open}
        title="Invite Team Member"
        onClose={() => setOpen(false)}
      >

        <form onSubmit={handleInvite} className="space-y-5">

          <Input
            label="Full Name"
            name="name"
            placeholder="Enter member name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter member email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="flex justify-end gap-3">

            <Button
              variant="secondary"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit">
              Add Member
            </Button>

          </div>

        </form>

      </Modal>

    </div>
  );
}