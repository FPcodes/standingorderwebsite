"use client";

import React, {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "../schema";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation'

const westchesterCities = [
  "Ardsley",
  "Bedford",
  "Bedford Hills",
  "Bronxville",
  "Briarcliff Manor",
  "Buchanan",
  "Cortlandt",
  "Cortlandt Manor",
  "Chappaqua",
  "Croton-on-Hudson",
  "Dobbs Ferry",
  "Eastchester",
  "Elmsford",
  "Greenburgh",
  "Harrison",
  "Hastings-on-Hudson",
  "Irvington",
  "Lake Peekskill",
  "Larchmont",
  "Mamaroneck",
  "Mohegan Lake",
  "Mount Kisco",
  "Mount Pleasant",
  "Mount Vernon",
  "New Rochelle",
  "North Salem",
  "North Castle",
  "Ossining",
  "Peekskill",
  "Pelham",
  "Pelham Manor",
  "Pleasantville",
  "Port Chester",
  "Rye",
  "Rye Brook",
  "Scarsdale",
  "Sleepy Hollow",
  "Somers",
  "South Salem",
  "Tarrytown",
  "Tuckahoe",
  "Valhalla",
  "White Plains",
  "Yonkers",
  "Yorktown",
  "Yorktown Heights",
];

const devices = [
  "No Device",
  "Cane",
  "Wheelchair",
  "Foldable Wheelchair",
  "Oversized WC",
  "Two Wheelchairs",
  "Two Large Wheelchairs",
  "WC and Oxygen",
  "Walker",
  "Scooter",
  "Crutches",
  "Car Seat",
  "Service Animal",
  "Oxygen",
  "Walker Cane",
  "WC & Service Animal",
  "Walker and Service Animal",
  "Extra Seat",
  "Oversized Scooter",
];

const daysOptions: number[] = [3, 4, 5, 6, 7];

const StandingOrderForm: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<FormData>();

  const [isChecked, setIsChecked] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('http://localhost:5142/submitted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      router.push(`/submitted?firstName=${data.firstName}&phone=${data.phone}`);
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setValue('secondPickup', getValues('firstDropoff'));
      setValue('cityThree', getValues('cityTwo'));
      setValue('zipThree', getValues('zipTwo'));
      setValue('secondDropoff', getValues('firstPickup'));
      setValue('cityFour', getValues('cityOne'));
      setValue('zipFour', getValues('zipOne'));
    } else {
      setValue('secondPickup', '');
      setValue('cityThree', '');
      setValue('zipThree', '');
      setValue('secondDropoff', '');
      setValue('cityFour', '');
      setValue('zipFour', '');
    }
  };


  return (
    <main>
      <section>
        <div className={styles.rulesbox}>
          <h2 className={styles.rulesh2}>Rules and Regulations</h2>
          <ul className={styles.rulesul}>
            <li className={styles.rulesli}>
              Client <strong>MUST</strong> have a 90-day travel history with
              consistent round trip and travel times, without any instances of{" "}
              <strong>No Shows, Cancel Late, or Cancel at the Door</strong>
            </li>
            <li className={styles.rulesli}>
              Roundtrips involving a school semester are{" "}
              <strong>NOT ALLOWED</strong>
            </li>
            <li className={styles.rulesli}>
              Client is required to undertake this roundtrip at least{" "}
              <strong>3 DAYS</strong> each week
            </li>
            <li className={styles.rulesli}>
              Every day must feature the same primary pick-up/drop-off locations
              and secondary drop-off/pick-up locations
            </li>
            <li className={styles.rulesli}>
              Standing Order must be renewed quarterly, specifically in{" "}
              <strong>March, June, September, and December</strong>
            </li>
            <li className={styles.rulesli}>
              If a client with a standing order incurs a 2nd violation, they
              will lose their standing order
            </li>
          </ul>
        </div>
      </section>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.clientInfo}>
            <div>
              <label>First Name</label>
              <input {...register("firstName")} />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div>
              <label>Last Name</label>
              <input {...register("lastName")} />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>

            <div>
              <label>Client ID</label>
              <input {...register("clientId")} />
              {errors.clientId && <p>{errors.clientId.message}</p>}
            </div>

            <div>
              <label>Phone</label>
              <input {...register("phone")} />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
          </div>

          <div id={styles.daysTravelingDiv}>
            <label>Days Traveling</label>
            <select
              {...register("daysTraveling", {
                setValueAs: (v) => parseInt(v, 10),
              })}
            >
              {daysOptions.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            {errors.daysTraveling && <p>{errors.daysTraveling.message}</p>}
          </div>

          <div className={styles.weekdayBoxes}>
            <label>Monday</label>
            <input type="checkbox" {...register("monday")} />

            <label>Tuesday</label>
            <input type="checkbox" {...register("tuesday")} />

            <label>Wednesday</label>
            <input type="checkbox" {...register("wednesday")} />

            <label>Thursday</label>
            <input type="checkbox" {...register("thursday")} />

            <label>Friday</label>
            <input type="checkbox" {...register("friday")} />

            <label>Saturday</label>
            <input type="checkbox" {...register("saturday")} />

            <label>Sunday</label>
            <input type="checkbox" {...register("sunday")} />
          </div>

          <div id={styles.tripDetails}>
            <div className={styles.tripDetailSection}>
              <label>First Pickup</label>
              <input {...register("firstPickup")} id="firstpickup"/>
              {errors.firstPickup && <p>{errors.firstPickup.message}</p>}

              <label>City One</label>
              <select {...register("cityOne")} id="cityone">
                {westchesterCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <label>Zip One</label>
              <input {...register("zipOne")} id="zipone"/>
              {errors.zipOne && <p>{errors.zipOne.message}</p>}
            </div>

            <div className={styles.tripDetailSection}>
              <label>First Dropoff</label>
              <input {...register("firstDropoff")} id="firstdropoff"/>
              {errors.firstDropoff && <p>{errors.firstDropoff.message}</p>}

              <label>City Two</label>
              <select {...register("cityTwo")} id="citytwo">
                {westchesterCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <label>Zip Two</label>
              <input {...register("zipTwo")} id="ziptwo"/>
              {errors.zipTwo && <p>{errors.zipTwo.message}</p>}

              <label>Dropoff Time</label>
              <input className={styles.timeCSS} type="time" step="1" {...register("dropoffTime")} />
              {errors.dropoffTime && <p>{errors.dropoffTime.message}</p>}
            </div>

            <div>
              <label>Round Trip Same Addresses</label>
              <input type="checkbox" id="maincheckbox" checked={isChecked} onChange={handleCheckboxChange} />
            </div>

            <div className={styles.tripDetailSection}>
              <label>Second Pickup</label>
              <input {...register("secondPickup")} id="secondpickup"/>
              {errors.secondPickup && <p>{errors.secondPickup.message}</p>}

              <label>City Three</label>
              <select {...register("cityThree")} id="citythree">
                {westchesterCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <label>Zip Three</label>
              <input {...register("zipThree")} id="zipthree"/>
              {errors.zipThree && <p>{errors.zipThree.message}</p>}
            </div>

            <div className={styles.tripDetailSection}>
              <label>Second Dropoff</label>
              <input {...register("secondDropoff")} id="secondropoff"/>
              {errors.secondDropoff && <p>{errors.secondDropoff.message}</p>}

              <label>City Four</label>
              <select {...register("cityFour")} id="cityfour">
                {westchesterCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <label>Zip Four</label>
              <input {...register("zipFour")} id="zipfour"/>
              {errors.zipFour && <p>{errors.zipFour.message}</p>}

              <label>Pickup Time</label>
              <input className={styles.timeCSS} type="time" step="1" {...register("pickupTime")} />
              {errors.pickupTime && <p>{errors.pickupTime.message}</p>}
            </div>
          </div>

          <div className={styles.tripMisc}>
            <label>Traveling with Aid</label>
            <input type="checkbox" {...register("travelingWithAid")} />
          </div>

          <div className={styles.tripMisc}>
            <label>Device</label>
            <select {...register("device")}>
              {devices.map((device) => (
                <option key={device} value={device}>
                  {device}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <div className={styles.questionbox}>
          <h2 className={styles.questionh2}>
            ParaTransit Directory (123-456-7890)
          </h2>
          <ul className={styles.questionul}>
            <li className={styles.questionli}>
              Extension 1: Speak to Agent to make reservation
            </li>
            <li className={styles.questionli}>
              Extension 2: Speak to dispatcher for same-day trips
            </li>
            <li className={styles.questionli}>
              Extension 5: Speak to eligibility to register or account questions
            </li>
            <li className={styles.questionli}>
              <strong>
                Extension 6: Speak to supervisor (John Doe) for standing order
                questions
              </strong>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default StandingOrderForm;
