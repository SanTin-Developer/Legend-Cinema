import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../components/UI/DropdownMenu";

import Card from "../components/UI/Card"; // default import, no {}
import { MapPin, ChevronDown, Check } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./UI/Button2";
import { FaLocationDot } from "react-icons/fa6";

const locations = [
  {
    id: "megamall",
    name: "Legend Cinema 271 Mega Mall",
    country: "Phnom Penh",
  },
  {
    id: "sihanouk",
    name: "legend Cinema Sihanoukville",
    country: "Sihanoukville Province",
  },
  { id: "tokyo", name: "Tokyo", country: "Japan" },
  { id: "paris", name: "Paris", country: "France" },
  { id: "sydney", name: "Sydney", country: "Australia" },
  { id: "berlin", name: "Berlin", country: "Germany" },
  { id: "singapore", name: "Singapore", country: "Singapore" },
  { id: "toronto", name: "Toronto", country: "Canada" },
];

export function LocalSelector({ selectedLocation, onLocationSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animatingClose, setAnimatingClose] = useState(false);

  const handleLocationSelect = (locationName) => {
    onLocationSelect(locationName);

    // Start closing animation
    setAnimatingClose(true);

    // Close after animation completes
    setTimeout(() => {
      setIsOpen(false);
      setAnimatingClose(false);
    }, 200);
  };

  const toggleOpen = () => {
    if (isOpen) {
      setAnimatingClose(true);
      setTimeout(() => {
        setIsOpen(false);
        setAnimatingClose(false);
      }, 200);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative z-50">
      {/* Trigger Button */}
      <Button
        variant="outline"
        onClick={toggleOpen}
        className={cn(
          "w-full justify-between h-12 px-4 transition-all duration-200 gap-2 -z-10",
          isOpen && "ring-2 ring-ring"
        )}
      >
        <FaLocationDot className="text-xl text-red-600 flex items-center m-auto -z-0" />
        <div className="flex items-center gap-2">
          <span className="text-foreground">
            {selectedLocation || "All Cinemas"}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform flex items-center m-auto duration-200",
            isOpen && "rotate-180"
          )}
        />
      </Button>

      {/* Dropdown Options */}
      {isOpen && (
        <Card
          className={cn(
            "absolute w-80 top-full left-0 right-0 mt-2 p-2 z-50 shadow-lg border bg-popover bg-white",
            "animate-in fade-in-0 zoom-in-95 duration-200",
            animatingClose && "animate-out fade-out-0 zoom-out-95 duration-200"
          )}
        >
          <div className="space-y-1 w-72 ">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => handleLocationSelect(location.name)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-md text-left",
                  "hover:bg-accent hover:text-accent-foreground transition-colors duration-150",
                  "animate-in slide-in-from-top-2 duration-200",
                  selectedLocation === location.name &&
                    "bg-accent text-accent-foreground"
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "both",
                }}
              >
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{location.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {location.country}
                  </span>
                </div>
                {selectedLocation === location.name && (
                  <Check className="h-4 w-4 text-primary animate-in zoom-in-50 duration-200" />
                )}
              </button>
            ))}
          </div>
        </Card>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-0  animate-in fade-in-0 duration-200"
          onClick={toggleOpen}
        />
      )}
    </div>
  );
}
